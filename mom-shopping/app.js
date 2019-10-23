function shoppingList(){
    const item = document.getElementById("foodInput").value
    const text = document.createTextNode(item)
    const newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("foodInput").appendChild(newItem)
    
}

addForm.addEventListener("submit", function(event){
    event.preventDefault()

    const formData = {
        title: foodListForm.title.value,
        description: foodListForm.description.value,
    }

    axios.post("https://api.vschool.io/Clint/todo", formData).then(response => console.log(response.data))

})

function deleteToDo(foodInput){
    const deleteBox = document.createElement("button")
    deleteBox.innerHTML = 'Delete';

    deleteBox.addEventListener("click", function(event){
        foodInput.deleted = deleteBox.checked

        deleteItem(todo, event.target.parentNode)
        console.log(event.target.deleted)
    })
    return deleteBox
    
}