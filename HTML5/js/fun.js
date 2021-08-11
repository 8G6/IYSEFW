$ = (a)=>document.querySelector(a)

let clean = (a) => {
  a=a.split('\n').filter(n=>n)
  let res = {}
  a.forEach((n)=>{
    n = n.split("=")
    try{
       if(n[1].length>1){
         console.log(n[0],n[1].match('True') || n[1].match('TRUE') ? true : n[1])
         res[n[0]]= n[1].match('True') || n[1].match('TRUE') ? true : n[1].replaceAll("  ","")
       }
    }
    catch(e){

    }
  })
  return res;
}

let DX = () => {
  
}

TPM  = clean(TPM)
RAM  = clean(RAM)
CPU  = clean(CPU)
BIOS = clean(BIOS)


