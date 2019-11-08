var ask = require("readline-sync");
const arr = ["Add", "Sub", "Div", "Mult"]

let num1 = ask.keyIn("Please choose your first number ")
console.log(num1)

let num2 = ask.keyIn("Please choose your second number ")
console.log(num2)

let index = ask.keyInSelect(arr, "Please select the operation to perform: ");
console.log('index is ' + index)

if(arr[index] === "Add"){
    add(num1, num2)
}

if(arr[index] === "Sub"){
    sub(num1, num2)
}

if(arr[index] === "Mult"){
    mult(num1, num2)
}

if(arr[index] === "Div"){
    div(num1, num2)
}

function add(num1, num2) {
  console.log(+num1 + +num2);
}

function mult(num1, num2) {
  console.log(num1 * num2);
}

function div(num1, num2) {
  console.log(num1 / num2);
}

function sub(num1, num2) {
  console.log(num1 - num2);
}

console.log("Here is the answer to the problem")
