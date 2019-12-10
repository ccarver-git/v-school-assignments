// const arr = [3, 6, 8, 2];

// const result = arr.filter((num) => {
//   if (num >= 5) {
//     return num
//   }
// });

// console.log(result)

// // const arr = [3, 6, 8, 2]

// // const result = arr.filter(function(num){
// //     if(num % 2 === 0) {
// //     return num
// //     }
// // })
// // console.log(result)

// // const arr = ["dog", "wolf", "by", "family", "eaten", "camping"];

// // const result = arr.filter(str => {
// //   if(str.length <= 5 ){
// //       return str
// //   }
// // })

// // console.log(result);

// // const arr = [
// //     { name: "Angelina Jolie", member: true },
// //     { name: "Eric Jones", member: false },
// //     { name: "Paris Hilton", member: true },
// //     { name: "Kayne West", member: false },
// //     { name: "Bob Ziroll", member: true }
// // ]

// // const result = arr.filter((member) => {
// //     if(member.member === true){
// //         return member
// //     }
// // })

// // console.log(result)

// // const arrAges = [
// //     { name: "Angelina Jolie", age: 80 },
// //     { name: "Eric Jones", age: 2 },
// //     { name: "Paris Hilton", age: 5 },
// //     { name: "Kayne West", age: 16 },
// //     { name: "Bob Ziroll", age: 100 }
// // ]

// // const results = arrAges.filter(ofAge => {
// //     if(ofAge.age <= 18)
// //     return ofAge
// // })
// // console.log(results)

// // SORT //

// // const arrNumbers = [1, 3, 5, 2, 90, 20]

// // arrNumbers.sort(function(a, b){
// //     return b - a
// // })

// // console.log(arrNumbers)

// // const wildAnimal = ["dog", "wolf", "by", "family", "eaten", "camping"];

// // wildAnimal.sort();

// // console.log(wildAnimal);

// // const age = [
// //   { name: "Quiet Samurai", age: 22 },
// //   { name: "Arrogant Ambassador", age: 100 },
// //   { name: "Misunderstood Observer", age: 2 },
// //   { name: "Unlucky Swami", age: 77 }
// // ];

// // age.sort(function(a, b){
// //     return a.age - b.age
// // })

// // console.log(age)

// // REDUCE //

// // const arr = [1,2,3]

// // const result = arr.reduce(function(final, num){
// //     final += num
// //     return final
// // })
// // console.log(result)

// // const numArr = [1, 2, 3];

// // const result = numArr.reduce(function(final, str) {});
// // console.log(result);

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false }
// ];

// // const voteCount = voters.reduce(function(final, voter){
// //     if(voter.voted){
// //         final++
// //     }
// //     return final
// // }, 0)
// // console.log(voteCount)

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// // const shoppingSpree = wishlist.reduce(function(final, amount) {
// //   final += amount.price;
// //   return final;
// // }, 0);
// // console.log(shoppingSpree);

// var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// function theBigArray(arr) {
//   return arr.reduce((final, str) => {
//     return final.concat(str);
//   });
// }
// console.log(theBigArray(arrays));

// const myList = [ 111, 222, 333, 444, 555 ]
// const results = myList.reduce( (acc, cur, i, arr ) => {
//     console.log(`
//         ${acc} accumulator: what's returned
//         ${cur} current value: the item of the array being accessed
//         ${i} index: index of the current value from the array
//         ${arr} array: the original array you're iterating through
//     `)
//     return acc + cur

// }, 10)

// console.log(results)

// MULTIPLE ARRAY METHODS //

var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
];

const mappedPeople = peopleArray.map((person, i) => { 
  console.log(i,person)
  return `<h1>${person.firstName} ${person.lastName}</h1>
          <h2>${person.age}</h2>`
})

console.log(mappedPeople)

const underTwenty = peopleArray.filter((person) => {
  console.log(person.age > 20)
  return person.age > 20
  
})











// const person = peopleArray.find((age) => age < 18)

// console.log(person)


// const sortedOfAge = arr => {
//   return arr
//     .filter(ofAge => ofAge.age >= 18)

//     //   var name = peopleArray.firstName

//     //   console.log(name)

//     //   console.log(`<li>${firstName}${lastName} is ${age}</li>`);
    
//     .sort((a, b) => a.lastName[0] > b.lastName[0]);
// }

// console.log(sortedOfAge(peopleArray));

// const sortedOfAge = people => people.filter(person => person.age >= 18).sort((a, b) => a.lastName[0] > b.lastName[0])

// console.log(sortedOfAge(peopleArray))


// console.log(peopleArray)



// console.log([2,3,55,33,22,33,66].sort((a, b) => {
//     console.log('Check', a, b, a - b)
//     return a - b
// }))

var arr = [1,2,3,4];

// const addOne = arr.map(function(item){
//     return item + 1;
// })

const addOne = arr.map((item) => item + 1)

console.log(addOne)

var numbers = [12,4,56,27];

numbers.filter(function(number){
    return number >= 25;
})

const older = numbers.filter((number) => number >= 25)

console.log(older)

var numbersTwo = [1,2,3,4,5];

const addTwo = numbersTwo.reduce((a, b) => a + b)

console.log(addTwo)

var points = [98, 123, 85, 78, 4]

const order = points.sort(function(a,b){
    return a - b
})
console.log(order)