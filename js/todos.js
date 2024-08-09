async function add(){
    const res=await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos=await res.json()
    str=``
    todos.map((todo)=>{
        str+=`<tr>
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed?`<span class="cmp">complete</span> `:`<span class="ncmp">not completed</span>`}</td>
            </tr>`
    })
    document.getElementById("tbody").innerHTML=str
}