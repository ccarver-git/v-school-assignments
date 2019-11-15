const readline = require("readline-sync");

let glassNotBroken = true;
let gameWon = false;
let basketCount = 0;

console.log("Welcome to NBA Jam");
const name = readline.question("What is your name? ");
console.log(
  `Welcome to the game ${name}, just like the arcade game the goal is to win or not get knockout by a broken backboard. First one to 5 points wins. You vs the CPU. Game on! `
);

gameStart()

while(gameWon && !glassNotBroken){
    if(basketCount === 5){
        backboardBroken = false;
        gameWon = true;
        console.log("BOOMSHAKALAKA! Great shot! Game over! You win!.");
    } else {
        let choice = readline.keyIn("WOuld you like to (d)dribble the ball, pass the ball or shoot?")
        // 
    } if (choose _){

    } else if (choose _){

    }
}

function gameStart(){
    //
}