// const readline = require("readline-sync");

// let gameLost = true;
// let gameWon = false;
// let basketCount = 0;

// //GOOD GUYS//
// const stockton = Hero John Stockton(shooting power, health power, )
// const mitchell = Hero Donovan Mitchell

// //good guy function (){

// }

// //BAD GUYS//
// const rodman = Enemy Dennis Rodman
// const artest = Enemy Ron Artest 

// // bad guy function(){

// }


// // GAME INTRODUCTION // 
// console.log("Welcome to NBA Jam");
// const name = readline.question("What is your name? ");
// console.log(
//   `Welcome to the game ${name}, just like the arcade game the goal is to win or not get knockout by a broken backboard. First one to 5 points wins. You vs the CPU. Game on! `
// );

// gameStart()

// while(!gameWon && !gameLost){
//     if(basketCount === 5){
//         gameLost = false;
//         gameWon = true;
//         console.log("BOOMSHAKALAKA! Great shot! Game over! You win!.");
//     } else {
//         let choice = readline.keyIn("Would you like to (d)dribble the ball, or (s)shoot the ball?", {limit: "ds"});
//         if (choose === "d"){
//             dribble()
//     } else if (choose === "s"){
//             shoot()
//         }
//     }
// }

// // CHOOSE A PLAYER BEFORE YOU START THE GAME //
// function gameStart(){
//     ("Would you like to be the (j) John Stockton or (d) Donovan Mtichell? ");
// }


// // DRIBBLING THE BALL //
// function dribble(){
//     //random chance of loosing the ball
// }

// // SHOOTING THE BALL //
// function shoot(){
//     // based on skill level you might have to dribble closer to the basket before shooting
// }

function soundOfMusic(arr, str){
    const newArr = []
    for(let i = 0; i < favoriteThings.length; i++){
        if(arr[i].includes(str))
        newArr.push(arr[i])
    }
    console.log(newArr)
}

soundOfMusic(["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles", "Warm woollen mittens"], "o");
