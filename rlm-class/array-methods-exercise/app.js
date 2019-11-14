var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function changeArray(fruit, vegetables) {
  vegetables.pop();
  console.log(vegetables);

  fruit.shift();
  console.log(fruit);

  const fruitAdd = fruit.indexOf("orange");
  console.log(fruitAdd);

  const addEndArray = fruit.push(fruitAdd);
  console.log(fruit);

  const vegiLength = vegetables.length;
  console.log(vegiLength);

  const addEndVegi = vegetables.push(vegiLength);
  console.log(addEndVegi);

  const food = fruit.concat(vegetables);
  console.log(food);

  food.splice(4, 2);
  console.log(food);

  const foodReverse = food.reverse();
  console.log(foodReverse)

  const newString = food.join();
  console.log(newString)
}

changeArray(fruit, vegetables);
