function foodOdered(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("food odered");
            resolve();
        },2000)


    })
}
function decorateVenue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("venue decorated");
            resolve();
        },2000)


    })
}
function  djParty(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("dj party done");
            resolve();
        },2000)


    })
}
foodOdered()
.then(()=>decorateVenue())
.then(()=>djParty())
.then(()=>{console.log("all task completed");})