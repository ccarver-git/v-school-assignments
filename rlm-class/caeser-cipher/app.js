//CAESER CIPHER//

// var readline = require('readline-sync');
// var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
// var shift = parseInt(readline.question('How many letters would you like to shift? '));

// one input - text
// one input - number positions

//PROBLEM SOLVING PRACTICE//

//#1//
// const numbers = []

// function returnLargest(arr){
//     for(let i = 0; i < arr.length; i++){

//     }
//     console.log();
// }
// returnLargest()

//#2 Write a function that takes an array of words and a character and return each word that has that letter present.// 

// function wordsCharacters(arr, str){
//     const newArr = []
//     for(i = 0; i < arr.length; i++){
//         if(arr[i].includes(str)){
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }

// wordsCharacters(["#3", "$$$", "C%4!", "Hey!"], "!");



// function letterPresent(){

//#3//
// function isDivisible(num1, num2) {
//   if (num1 % num2 === 0) {
//     console.log("Yes, num1 is divisible " + true);
//   } else {
//     console.log("WRONG!");
//   }
// }
// isDivisible();

// - PRACTICE - using .toLowerCase(), .toUpperCase(), .slice(), .length and .concat(), make a capitalized version

const frozenTwo = "Is the whole “putting us in mortal danger” going to be a regular thing?"
const frozenQuote = "Here is a quote from Frozen II, "

const twoStrings = frozenQuote.concat(frozenTwo);
console.log(twoStrings);

// const lowerCase = frozenTwo.toLowerCase();
// console.log(lowerCase)

// const upperCase = frozenTwo.toUpperCase();
// console.log(upperCase)

// const sliceFrozen = frozenTwo.slice(7, 12);
// console.log(sliceFrozen)

// console.log(frozenTwo.length)



// - Given: cannedMeats = ["chicken", "spam", "tuna", "clams"], how would we get get the index of "tuna"?