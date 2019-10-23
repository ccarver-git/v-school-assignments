const list = document.getElementById("list")

axios.get("https://api.vschool.io/Clint/todo").then((response) => {
    const todos = response.data

    console.log(todos)
    for(let i = 0; i < todos.length; i ++){
        makeTodo(todos[i])
    }
})

function deleteToDo(todo){
    const deleteBox = document.createElement("button")
    deleteBox.innerHTML = 'Delete';

    deleteBox.addEventListener("click", function(event){
        todo.deleted = deleteBox.checked

        deleteItem(todo, event.target.parentNode)
        console.log(event.target.deleted)
    })
    return deleteBox
    
}

function deleteItem(todo, parent){
    parent.parentNode.removeChild(parent)
    axios.delete(`https://api.vschool.io/Clint/todo/${todo._id}`, todo).then(response => {
        console.log(response.data)
    })

}

function makeTodo(todo){
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const checkbox = document.createElement("input")
    const price = document.createElement("price")
    const deleteBox = deleteToDo(todo)
    
    h1.textContent = todo.title
    if(todo.completed){
        h1.style.textDecoration ="line-through"
    }

    checkbox.type = "checkbox"
    checkbox.checked = todo.completed

    checkbox.addEventListener("change", e => {
        axios.put("https://api.vschool.io/Clint/todo/" + todo._id, { completed: e.target.checked }).then(response => {
            h1.style.textDecoration = response.data.completed ? "line-through" : "none"
        })
    })

    p.textContent = todo.description
    img.src = todo.imgUrl
   

    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(checkbox)
    console.log(container)

    list.appendChild(container)
    container.appendChild(price)
    container.appendChild(deleteBox)
}

function updateToDo(todo){
    axios.put(`https://api.vschool.io/Clint/todo/${todo._id}`, todo).then(response => console.log(response.data))
}


const addForm = document.addForm

addForm.addEventListener("submit", function(event){
    event.preventDefault()

    const formData = {
        title: addForm.title.value,
        description: addForm.description.value,
        imgUrl: addForm.imgUrl.value,
        price: addForm.price.value
    }

    axios.post("https://api.vschool.io/Clint/todo", formData).then(response => console.log(response.data))

})