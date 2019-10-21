const list = document.getElementById("list")

axios.get("https://api.vschool.io/Clint/todo").then((response) => {
    const todos = response.data

    console.log(todos)
    // todos.forEach(todo=>{
    //     makeTodo(todo)
    // })
    for(let i = 0; i < todos.length; i ++){
        makeTodo(todos[i])
    }
})

function makeTodo(todo){
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const checkbox = document.createElement("input")


    if(todo.completed){
        h1.style.textDecoration ="line-though"
    }

    // InputDeviceInfo = todo.title
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed

    checkbox.addEventListener("change", function(event){
        todo.completed = checkbox.checked

        updateToDo(todo)
        console.log(event.target.checked)
    })

    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.imgUrl
   

    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(checkbox)
    console.log(container)
    list.appendChild(container)
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
        imUrl: addForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/Clint/todo", formData).then(response => console.log(response.data))

})