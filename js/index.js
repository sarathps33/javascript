async function getProducts(){
 try {
     const res=await fetch("https://dummyjson.com/products")
    const products=await res.json()
     str=``
     products.products.map((product)=>{
         str+=`<div class="card">
            <img class="pic" src="${product.thumbnail}" alt="">
            <h2>${product.id}</h2>
            <h3 class="font">${product.title.length>=20?`${product.title.substring(0,20)}...`:product.title}</h3>
            <h3 class="fon">${product.price}</h3>
            <p>${product.offer}</p>
            <a href="./product.html"><button class="click">BUY</button></a>
        </div>     `
    })
    document.getElementById("sir").innerHTML=str   
 } catch (error) {
    console.log(error);
 }
}
getProducts()
//search
document.getElementById("Search").addEventListener("keyup",async(e)=>{
    console.log(e.target.value);
    try {
        const res=await fetch("https://dummyjson.com/products")
       const products=await res.json()
        str=``
        products.products.filter((product)=> product.title.toLowerCase().includes(e.target.value.toLowerCase())).map((product)=>{
            str+=`<div class="card">
               <img class="pic" src="${product.thumbnail}" alt="">
               <h2>${product.id}</h2>
               <h3 class="font">${product.title.length>=20?`${product.title.substring(0,20)}...`:product.title}</h3>
               <h3 class="fon">${product.price}</h3>
                 <p>${product.offer}</p>
               <button class="click">BUY</button>
           </div>
   
              `
       })
       document.getElementById("sir").innerHTML=str   
    } catch (error) {
       console.log(error);
    } 
})