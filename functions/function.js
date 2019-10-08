//scoping
//let
//const

// function addNums(num1, num2){
//     let name = 2
//     return num1 + num2
//     if(num1 === num2){
//         let name = "Freddick"
//     }
//     return name
// }
// const total = addNums (5,8)

// console.log(total)


// function nameOfFunction() {
//     console.log("I'm inside a fucntion!");
// }
// return nameOfFunction ()

// function addNumbers(paramOne, paramTwo) {
//     console.log(paramOne + paramTwo);
// }
// return addNumbers(1, 7)


//review of functions
function toaster (slot1, slot2) {
    return slot1
}

console.log(toaster('bread', 'waffles'))

//methods vs functions
//method is a function within an object. It will start with a string or an oject.

toaster(arguments) = a functions

Array.toaster() = a //method - look for the dot in front of the function

// cons myObj = {
//     toast: function(){
//         console.log('toasted')
//     }
// }

// myObj.toast('english muffin')

//expression vs declaration

//funcName() ---> will run anwyhere in code
//functionName () ---> has to be run after is was written

//expression will not hoist to the top
const functionName = function(){

}

//declaration
function  funcName() {
    console.lgo('declaration called')
}


//fat arrow functions - ES6 - shorthand way to write just pne parameter you do not need "" if you have more than one parthe

const arrowFunc = param = => code block; //if you only have one parameter, no parenthesis are required

const arrowFunc = () => {
    code block;
}
// if you are writing multiple lines on your code block, use curly brace





