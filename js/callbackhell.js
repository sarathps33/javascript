function foodOdered(callback){
    setTimeout(()=>{
        console.log("food odered");
        callback();
    },2000)
}
function decorateVenue(callback){
    setTimeout(()=>{
        console.log("decoration done");
        callback();
    },2000)
}
function djParty(callback){
    setTimeout(()=>{
        console.log("dj arranged");
        callback();
    },2000)
}
foodOdered(()=>{
    decorateVenue(()=>{
        djParty(()=>{
            console.log("all tasks completed");
        })
    })
})