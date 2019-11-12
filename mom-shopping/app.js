const addForm = document.getElementById("foodListForm");
const foodInput = document.getElementById("foodInput");


addForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.dir(foodInput.value);
  const li = document.createElement("li");
  li.textContent = foodInput.value;
  getItems.appendChild(li);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Item";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function(event) {
    // event.preventDefault();
    getItems.removeChild(li);
  });
});


for(let i = 0; i < 20; i--){

}
