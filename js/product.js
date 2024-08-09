async function fetchProduct(){
    const urlParams=new URLSearchParamas(window.location.search)
    const id=urlParams.get("id");
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    const product=await res.json();
    document.getElementById("img").src=product.thumbnail
    str+=``
    product.image.map((image)=>)

}