function fetchData(){
    return new Promise((resolve,reject)=>{
        data={msg:"promise program demo"}
        reject(data)

    })
}
fetchData((dt)=>{
    console.log("resolve");
    console.log(dt);

})
.catch((error)=>{
    console.log("reject");
    console.log(error);

})