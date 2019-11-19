// const addForm = document.getElementById("foodListForm");
// const foodInput = document.getElementById("foodInput");


// addForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   console.dir(foodInput.value);
//   const li = document.createElement("li");
//   li.textContent = foodInput.value;
//   getItems.appendChild(li);

//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete Item";
//   li.appendChild(deleteButton);

//   deleteButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     getItems.removeChild(li);
//   });
// });

const giftInput = document.getElementById("giftInput");
const addForm = document.getElementById("giftListForm")

addForm.addEventListener("submit", function(e){
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = giftInput.value;
  
  const addImage = document.createElement("img");
  addImage.src = giftImage.value;
  li.appendChild(addImage);
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Gift";
  li.appendChild(deleteButton);
  
  giftItems.appendChild(li);
  console.dir(li);
  deleteButton.addEventListener("click", function(e) {
    event.preventDefault();
    li.parentNode.removeChild(li);
    
  })
})
