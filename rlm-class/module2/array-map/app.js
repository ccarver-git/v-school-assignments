// const result = arr.map(num => num + 10)

// const doubleNumbers = arr.map(num => num * 2)

// function doubleNumbers(arr) {
//   return arr.map(num => {
//     return num * 2;
//   });
// }
// console.log(doubleNumbers([2, 5, 100]));

// function stringItUp(arr) {
//   return arr.map(str => {
//     return String(str);
//   });
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function capitalizeNames(arr) {
//   return arr.map((cap) => {
//     return cap.toUpperCase()
//   })
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function namesOnly(arr){
//     return arr.map((names) => {
//         return names.name
//     })
// }

//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));

// #5
function makeStrings(arr) {
  return arr.map(matrix => {
    if (matrix.age > 18) {
      return `${matrix.name} is old enough to go to the movie`;
    } else {
      return `${matrix.name} is not enough to go to the movie`;
    }
  });
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr) {
  return arr.map(person => {
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
  });
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
);
