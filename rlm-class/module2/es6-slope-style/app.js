// function collectAnimals(...animals) {
//     console.log(animals)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }
// console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))
// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])

// const vacation = {
//     location: "V School",
//     duration: "12 weeks"
//     };

// const parseSentence = ({location, duration}) => {
//     return `We're going to have a good time at ${location} for ${duration}`
//   }

// console.log(parseSentence(vacation))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// const firstActivity = favoriteActivities[0]

// function returnFavorites(arr){
//     const [ firstFav, secondFav, thirdFav ] =  favoriteActivities
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// returnFavorites(favoriteActivities)

// function combineAnimals(realAnimals,magicalAnimals,mysteriousAnimals) {
//     const allAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
//     console.log(allAnimals)
//     return allAnimals
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// const product = (a, b, c, d, e) => {
//   var numbers = [a, b, c, d, e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1);
// };

// const unshift = (...array) => {
//   return [...array, ...a, ...b, ...c, ...d, ...e]
// }

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        return {firstName, lastName};
})

const populatePeople = (["Frank Peterson", "Suzy Degual", "Liza Jones"]);

