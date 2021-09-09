// let specs = [TPM,RAM,CPU,BIOS]
// let part  = [
//              'Trusted Platform Module',
//              'Random Acceses Memory',
//              'Central Processing Unit',
//              'Bosic Input and Output System'
//             ]
// let compat = ['Yes','Yes','Yes','Yes']
// function OneSpace(a){
//     for(j=0;j<a.length;j++){
//         l='';
//         for(i=0;i<a[j].length;i++)
//         {
//             if(!(a[j][i]==' ' && a[j][i+1]==' ' && i<a[j].length))
//             {
//                 l+=a[j][i]
//             }

//         }
//         a[j]=l.split(' ').filter(n=>n)
//     }
   
//     return a
// }
// function size(a,pri=3){
//     a=parseInt(a)
//     let p=['b','B','Kb','KB','Mb','MB','Gb','GB','Tb','TB']
//     let o={}
//     let q=[
//            a*8,
//            a,
//            (a/(1024))*8,
//            a/(1024),
//            (a/(1024**2))*8,
//            a/(1024**2),
//            (a/(1024**3))*8,
//            a/(1024**3),
//            (a/(1024**4))*8,
//            (a/(1024**4))
//         ]
//     for(i=0;i<p.length;i++){
//       o[p[i]]=parseFloat(q[i].toFixed(pri))
//     }
//     return o
// }
// function useful(data){
     
// }

// ROM=ROM.split('\n').filter(n=>n)
// k=[]
// ROM.forEach(n=>k.push(n.match(/-/g)))
// k=k.sort().filter(n=>n)
// k=k[k.length-1].length
// ROM.forEach(n=>{try{n.match(/-/g).length==37 ? k=ROM.indexOf(n) : 0}catch(e){}})
// ROM[k]=''
// ROM=OneSpace(ROM.filter(n=>n))
// ROM=useful(ROM)

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
