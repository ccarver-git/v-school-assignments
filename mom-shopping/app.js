function shoppingList(){
    const item = document.getElementById("foodInput").value
    const text = document.createTextNode(item)
    const newItem = document.createElement ("li")
    newItem.appendChild(text)
    document.getElementById("foodInput").appendChild(newItem)
}