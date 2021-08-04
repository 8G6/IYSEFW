$ = (a)=>document.querySelector(a)
load = () =>{
    RES=SYS_INFO.split('~').filter(n=>n)
    res=[]
    storage=RES[3].replaceAll('\n','<br>')
    DX =  RES[RES.length-1]
    RES.filter(n=>{if(n.length>2){return n}}).forEach((n)=>{res.push(n.split('\n').filter(n=>n).filter(n=>{if(/\S/.test(n)){return n}}))})
    let temp=[]
    keys=['TPM','CPU','Storage','RAM','BIOS'];
    system={}
    for(i=0;i<keys.length;i++){
        system[keys[i]]={}
    }
    for(i=0;i<res.length;i++){
      for(j=0;j<res[i].length;j++){
          try{
            temp=res[i][j].split('=')
            if(temp[1].length>1){
              system[keys[i]][temp[0]]=temp[1].match('True') || temp[1].match('TRUE') ? true : temp[1]
            }
          }
          catch(e){}  
      }
    }
    console.log(system) 
    $('#BOIS').innerHTML=JSON.stringify(system["BIOS"]).toString().replaceAll(',','<br>')
    $('#RAM').innerHTML=JSON.stringify(system["RAM"]).replaceAll(',','<br>')
    $('#TPM').innerHTML=JSON.stringify(system["TPM"]).replaceAll(',','<br>')
    $('#CPU').innerHTML=JSON.stringify(system["CPU"]).replaceAll(',','<br>')
    $('#Storage').innerHTML=storage
    $('#dx').innerHTML=DX.replaceAll("\n","<br>")
}