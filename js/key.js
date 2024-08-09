/*document.getElementById("click").addEventListener('click',()=>{
let data=document.getElementById("txt").value
data=console.log(data);
data=document.getElementById("txt").value=""
})
console.log("start");
setTimeout(() => {
    for(i=1;i<=10;i++){
        console.log(i);
    }   
},4000 );
console.log("end");*/

// i=10;

// y=setInterval(()=>{
//     document.getElementById("sarath").textContent=i
   
//     if(i==0){
//         document.getElementById("sarath").textContent="end"
   
//         clearInterval(y);
        
        
//     }
    
//     i--;

// },1000);
function addNo(){
    let f=parseInt(document.getElementById('one').value);
    for(i=0;i<=10;i++)
        str=" "
        {
        str=`${i}x${f}=${i*f}`
    }
    document.getElementById("multi").textcontent=str
}


