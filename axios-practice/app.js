// const xhr = new XMLHttpRequest()

// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data.objects[0])
//         showData(data.objects[0].pokemon)
//     }
// }

// function showData(arr){
//     for(let i = 0; i < arr.length; i++){
//     const h2 = document.createElement('h2')
//     h2.textContent = arr[i].name
//     document.body.appendChild(h2)
//     }
// }

const list = document.getElementById("list")

axios.get("https://api.vschool.io/Clint/todo").then((response) => {
    const todos = response.data

    console.log(todos)
    for(let i = 0; i < todos.length; i++){
        createTodo(todos[i])
    }
})

function createTodo(todo){
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const checkbox = document.createElement("checkbox")
    const price = document.createElement("price")
    const deletebox = deleteTodo(todo)

    h1.textContent = todo.title
    
    if(todo.completed){
        h1.style.textDecoration = "line-through"
    }

    checkbox.type = "checked"
    checkbox.checked = todo.completed

    checkbox.addEventListener("change", e => {
        axios.put("https://api.vschool.io/Clint/todo/" + todo._id, { completed: e.target.checked }).then(response => {
            h1.style.textDecoration = response.data.completed ? "line-through" : "none"
        })
    })

    p.textContent = todo.description
    img.src = todo.imgUrl

    container.appendChild(h1)

function deleteItem(){

}

function deleteTodo(todo){

}


function updatedTodo(){

}




