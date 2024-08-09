function clock(){
    let date=new Date();
    hr=date.getHours();
    ap=hr<12?"AM":"PM"
    h=hr%12==0?12:hr%12
    document.getElementById("clock").textContent=`${putZero(h)} - ${putZero(date.getMinutes())} - ${putZero(date.getSeconds())} - ${ap} `
    setTimeout(()=>{
        clock()
    },1000)
}
clock();

function putZero(time){
    return time<10?"0"+time:time;
}
