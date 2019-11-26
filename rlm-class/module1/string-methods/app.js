// function capilizeAndLowercase(str){
//     return str.toUpperCase() + str.toLowerCase()
// }
// console.log(capilizeAndLowercase("hello"))

// function findMiddleIndex(str){
//     return Math.floor(str.length / 2)
// }
// console.log(findMiddleIndex("Hello World"))

// const str = "Jazz Fans"

// function returnFirstHalf(){
//   return str.slice(0, str.length / 2)
// }
// console.log(returnFirstHalf(str))

// const newStr = "I love to play golf"

// function returnHalf(){
//     return newStr.slice(0, newStr.length / 2)
// }
// console.log(returnHalf(newStr))


const oldString = "Batman is lame, Superman is the best"

function capLowerCase(oldString){

    const firstHalf =  oldString.slice(0, Math.floor(oldString.length / 2));
    const firstUpper = firstHalf.toUpperCase();
    console.log(firstUpper)
    
    const secondHalf = oldString.slice(Math.floor(oldString.length / 2, oldString.length));
    const secondLower = secondHalf.toLowerCase();
    console.log(secondLower)
}

console.log(capLowerCase(oldString))
