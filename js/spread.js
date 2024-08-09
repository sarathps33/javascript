// c={name:"sarath",age:21}
// b={...c}
// c.name="yadhav"

// x={name:"sarath" , age:21,dep:"cs",skill:{db:"mongodb",frame:"react"}}
//  console.log(x.skill.frame);
// let {name,age,dep,skill:{db,frame}}=x
// console.log(name,age,dep,skill);

//  x=[{name:"saea,",age:21},1,2,3,4,5]
//  let [{name,age},a,b,c,d,e,]=x
//   console.log(a,b,c,d,e,name,age);
function sendMassage(msg){
    console.log("sendmassage");
    console.log(msg);

}
function getMassage(callback){
    console.log("getmassage");
    console.log("hai team");
}
getMassage(sendMassage);