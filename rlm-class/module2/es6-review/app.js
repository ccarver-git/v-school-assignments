// // const button = document.getElementById('button')
// // const output = document.getElementById('output')
// // const input = document.getElementById('input')

// // change this function to be an arrow function

// button.addEventListener('click', () => {
//     output.innerText = `You've submitted: ${value}`
// })

// //-------------------------------------------------------------------------------------------
// // Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// function collectAnimals(...animals) {  
//     return animals
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// //-------------------------------------------------------------------------------------------
// // Use destructuring to use the property names as variables:

// const vacation = {  
//   location: "Burly Idaho",
//   duration: "2 weeks"
// };

// function parseSentence({location, duration}){
//   return `We're going to have a good time in ${location} for ${duration}`
// }

// console.log(parseSentence(vacation)) // this line will break stuff unless you fix the parameter

//-------------------------------------------------------------------------------------------
// Make the following function more ES6xy. Use at least both the rest and spread operators:
// this function should add as many items to the front of the returned array as the caller of the function wants
// function unshift(array, ...second) {  
//   return [...second, ...array];
// }

// //-------------------------------------------------------------------------------------------
// // make "greeting" default to "hello"
// function greet(name, greeting){
//     return greeting + ", " + name
// }

// // console.log(greet('Emily'))
// let name = "John"
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         name;
//         if (pets[i] = "cat") {
//             name == "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) { 
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}
console.log(carrot)

var doMathSum = (a, b) => {
    return a + b
}

var produceProduct = (a, b) => {
    return a * b
}