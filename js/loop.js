a=[
    {name:"sarath",age:21,dep:"mern",salary:"45000"},
    {name:"jerike",age:21,dep:"mern",salary:"45000"},
    {name:"yadhav",age:21,dep:"mern",salary:"45000"},
    {name:"aljo",age:21,dep:"mern",salary:"45000"},
    {name:"aljo",age:21,dep:"mern",salary:"3000"},
    {name:"jeevan",age:21,dep:"mern",salary:"45000"},

]
// for(i in a){
//     console.log(a[i].name);
// }
// ------------------------
// a.forEach(item => {
//     console.log(item);
    
// });
// ------------------------
// let b=a.find((item)=>{
//     return item.name=="aljo";
// })
// console.log(b);
// ------------------------
let b=a.filter((item)=>{
    return item.name=="aljo"
})
console.log(b);
