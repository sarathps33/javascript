let a=[
    {name:"aljo",age:20,class:12},
    {name:"jerikeee",age:20,class:12},
    {name:"sarathhh",age:20,class:12},
    {name:"yadhavv",age:20,class:12},
]
b=JSON.stringify(a);
console.log(b);
c=JSON.parse(b);
console.log(c);
for(i=0;i<c.length;i++){
console.log(a[i].name);
}