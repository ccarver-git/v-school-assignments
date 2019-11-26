// var officeItems = [
//   "stapler",
//   "monitor",
//   "computer",
//   "desk",
//   "lamp",
//   "computer",
//   "lamp",
//   "stapler",
//   "computer",
//   "computer"
// ];
// var count = 0;

// for (let i = 0; i < officeItems.length; i++) {
//   if (officeItems[i] === "computer") {
//     count++;
//   }
// }
// console.log(count);

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//   {
//     name: "Mike",
//     age: 12,
//     gender: "male"
//   },
//   {
//     name: "Madeline",
//     age: 80,
//     gender: "female"
//   },
//   {
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
//   },
//   {
//     name: "Sam",
//     age: 30,
//     gender: "male"
//   },
//   {
//     name: "Suzy",
//     age: 4,
//     gender: "female"
//   }
// ];

// for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//   if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
//     console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} not old enough`);
//   } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
//     console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough`);
//   }
// }

// var users = [
//   {
//     name: "joe",
//     age: 30
//   },
//   {
//     name: "steve",
//     age: 23
//   },
//   {
//     name: "sarah",
//     age: 39
//   },
//   {
//     name: "lisa",
//     age: 27
//   }
// ];

// for(let i = 0; i < users.length; i++){
//   console.log("Hi I am " + users[i].name + ". I am " + users[i].age + " years old.")

// }

// 6. Using the pets array, how would you write a for loop that would console.log all the pets in
//     reverse order?

// var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]

// for(i = petsArr.length - 1; i >= 0; i--){
//   console.log(petsArr[i])
// }

// var arrayOfArrays = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// for(i = 0; i < arrayOfArrays.length; i++){
//   for( j = 0; j < arrayOfArrays[1]; j++){
//     console.log(arrayOfArrays[1][2])
//   }
// }

// console.log(arrayOfArrays[1][2])

// console.log(arrayOfArrays[0][0])

// console.log(arrayOfArrays[2][2])

// console.log(people[0]+ ": " + alphabet)

// var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

// for(i = 0; i < eventsAtWork.length; i++){
//   if(eventsAtWork[i] === "party"){
//     console.log("hooray")
//   }
// }

// var count = 0

// var booleans = [true, true, false, true, false, false, false]

// for(i = 0; i < booleans.length; i++){
//   if(booleans[i] === true)
//   count++
// }

// console.log(count)

//PRACTICE//

// var users = [
//   {
//     name: "Sophie",
//     age: 12
//   },
//   {
//     name: "Larry",
//     age: 32
//   },
//   {
//     name: "Cathy",
//     age: 40
//   }
// ];

// for (i = 0; i < users.length; i++) {
//   users[i]isAdmin === true;
//   console.log(users[i]);
  //add isAdmin as a property to each person
// }

//FORECEPTION//

// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
// var alphabet = "abcdefghijklmnopqrstuvwxyz";

// function forception(people, alphabet) {
//   const newArr = []
//   for (i = 0; i < people.length; i++) {
//     newArr.push(people[i] + ': ', ...alphabet.toUpperCase().split(''))
//   }
//   console.log(newArr)
// }
// forception(people, alphabet)

// const newArr = people.map(people => people + alphabet)

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet){
  const newArr = []
  for(i = 0; i < people.length; i++){
    newArr.push(people[i] +': ', alphabet.toUpperCase().split(''))
  }
  console.log(newArr)
}
forception(people, alphabet)


