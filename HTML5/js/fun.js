let {keys,values}=Object

let $             = (a) => document.querySelector(a)

let text_float    = (n) => isNaN(parseFloat(n)) ? n : parseFloat(n) 

let text_to_logic = (n) => (n.match('True') || n.match('TRUE')) 
                           ? true : text_float(n.replaceAll(" ",""))

let clean = (a) => {
    a=a.split('\n').filter(n=>n);
    let res = {}
    a.forEach((n)=>{
                    n = n.split("=")
                    try{
                      if(n.length>1){
                        res[n[0]]=text_to_logic(n[1])
                      } 
                    }
                    catch(e){}
                  }
            )
    return res;
}

let multi_clean = (a,name)=>{
    k={}
    a=a.split('\n\n').filter(n=>n!='\n' && n!='' ? n : '');
    for(i=0;i<a.length;i++){
     k[name+`${i}`]=clean(a[i])
    }
    return k
}




TPM  = clean(TPM)
RAM  = clean(RAM)
CPU  = clean(CPU)
BIOS = clean(BIOS)


GPU   = multi_clean(GPU,"GPU")
ROM   = multi_clean(ROM,"ROM")
ROMT  = multi_clean(ROMT,"ROMT")

kvp=[];
keys(ROMT).forEach(n=>kvp.push([keys(ROMT[n]),values(ROMT[n])]))
let main = keys(ROM)
for(i=0;i<main.length;i++){
  for(j=0;j<kvp[i][0].length;j++){
    ROM[main[i]][kvp[i][0][j]]=kvp[i][1][j]
  }
}
