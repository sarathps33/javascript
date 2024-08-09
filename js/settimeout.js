i=1;
function sad(){
    document.write("*")
    i++;

setTimeout(()=>{
    if(i<=10){
        sad()
    }
},1000)
}
sad();
