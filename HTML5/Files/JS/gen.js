TPM  = clean(TPM)
RAM  = clean(RAM)
CPU  = clean(CPU)
BIOS = clean(BIOS)


GPU   = multi_clean(GPU,"GPU")
ROM   = multi_clean(ROM,"ROM")
ROMT  = multi_clean(ROMT,"ROMT")

let {keys,values}=Object
kvp=[];
keys(ROMT).forEach(n=>kvp.push([keys(ROMT[n]),values(ROMT[n])]))
let main = keys(ROM)
for(i=0;i<main.length;i++){
  for(j=0;j<kvp[i][0].length;j++){
    ROM[main[i]][kvp[i][0][j]]=kvp[i][1][j]
  }
}

keys(ROM).forEach(n=>{
  ROM[n]["FreeSpace"]=size(ROM[n]["FreeSpace"])
  ROM[n]["Size"]=size(ROM[n]["Size"])
})


RAM["Capacity"]=size(RAM["Capacity"])
keys(GPU).forEach(n=>{
  GPU[n].AdapterRAM=size(GPU[n].AdapterRAM)
})

let table = () => {
    for(i=0;i<4;i++){
    $('table').innerHTML +=     `<table>
                                    <tr>
                                        <td>${part[i]}</td>
                                        <td>${specs[i]}</td>
                                        <td>${compat[i]}</td>
                                    </tr>
                                </table>
                                `
    }
}
