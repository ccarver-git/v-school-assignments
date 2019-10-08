// // .push

// // const animals = ["dog, 'cat"]

// // animals.push("mouse")

// // console.log(anmials)

// // .pop() - removes an item

// // const animals = ["dog, 'cat"]

// // console.log(animals.pop())

// // console.log(animals)

// // .shift - removes the first one and returns it

// // const animals = ["dog, 'cat"]

// // console.log(animals.shift("mouse"))

// // console.log(animals)

// // .splice()

// // const animals = ["dog", "cat", "spider-monkey", "bird", "horse"]

// // console.log(animals.splice(2, 1, "turtle"))

// // console.log(animals)

// // .concat()

// // const plants = ["flower", "tree", "bush"]

// // animals.concat(plants)

// // console.log("i like flowers")


// // .reverse

// // const plants = ["flower", "tree", "bush"]

// // animals.concat(plants)

// // console.log("i like flowers")

// // .slice

// // const plants = ["flower", "tree", "bush"]

// // animals.concat(plants)

// // console.log("i like flowers")

// // .join

// function reverseString(str){
//     return str.split("").reverse().join()
// }

// console.log(reverseString("hello"))

// // fat arrow - const reverseString = (str) => str.split("").reverse("").join()

// // /indexOf

// function removeFromArrayOfStrings(str){

// }

// removeFromArrayOfStrings("dog", "cat", "spider-monkey", "bird", "horse")

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function changeArray(fruit, vegetables) {
    vegetables.pop();
    // console.log(vegetables)
    fruit.splice(0,1);
    // console.log(fruit);

    let a = fruit.indexOf("orange");
    fruit.push(a);

    let b = vegetables.length
    vegetables.push(b)

    // console.log(vegetables)

    const food = fruit.concat(vegetables)
    // console.log(food)

    food.splice(4,2)
    console.log(food)

    const foodBackwards = food.reverse()
    console.log(foodBackwards)

    const finalString = foodBackwards.toString();
    console.log(finalString)

}
changeArray(fruit, vegetables)