function table_template(rows,cloumns,obj,arr){
    
    str='<table>'
for(i=1;i<rows+1;i++){
    str+="<tr>"
    for(j=1;j<cloumns+1;j++){
        str+=`<td>c${i}${j}</td>`
    }
    str+="</tr>"
}
str+='</table>'
}