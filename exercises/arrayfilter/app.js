
//.MAP

function doubleNumbers(arr){
  return arr.map((num) => {
    return num * 2 
  })
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr){
  return arr.map((clown) => {
    return String(clown)
  })
}

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr){
  return arr.map((lower) => {
    return lower.toUpperCase() + lower.slice(1); 
  })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function fiveCharactersOrFewerOnly(arr) {
//   return arr.map((char) => {
//     return char > 5
//   })
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// function namesOnly(arr){
//   return arr.map((person) => {
//     return `<h1>${person.name}</h1><h2>${person.age}</h2>`
//   })
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function ofAge(arr){
  // your code here
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]


//.FILTER
// function fiveAndGreaterOnly(arr) {
//   return arr.filter((person))
// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// function evensOnly(arr) {
//   // your code here
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


// function peopleWhoBelongToTheIlluminati(arr){
//   return arr.filter((person) => {
//     return person.member
//   })
// }

// console.log(peopleWhoBelongToTheIlluminati([
//   { name: "Angelina Jolie", member: true },
//   { name: "Eric Jones", member: false },
//   { name: "Paris Hilton", member: true },
//   { name: "Kayne West", member: false },
//   { name: "Bob Ziroll", member: true },
// ]));