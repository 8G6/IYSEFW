$             = (a) => document.querySelector(a)

text_float    = (n) => isNaN(parseFloat(n)) ? n : parseFloat(n) 

text_to_logic = (n) => (n.match('True') || n.match('TRUE')) 
                           ? true : n.match(/[0-9]+.+[0-9]/g)
                           ? text_float(n) : n

clean = (a) => {
    a=a.split('\n').filter(n=>n);
    res = {}
    a.forEach((n)=>{
                    n = n.split(":=")
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

multi_clean = (a,name)=>{
    k={}
    a=a.split('\n\n').filter(n=>n!='\n' && n!='' ? n : '');
    for(i=0;i<a.length;i++){
     k[name+`${i}`]=clean(a[i])
    }
    return k
}
fix=(a,b=3) =>{
  return parseFloat(a.toFixed(b))
} 
size=(a)=>{
  g=1024;
  b=8;
  return {
    "b":fix(a*b),
    "B":fix(a),
    "kb":fix((a*b)/g),
    "kB":fix(a/g),
    "Mb":fix((a*b)/g**2),
    "MB":fix(a/g**2),
    "Gb":fix((a*b)/g**3),
    "GB":fix(a/g**3),
    "Tb":fix((a*b)/g**4),
    "TB":fix(a/g**4)
  }
}




