const ask = require("readline-sync");

const currentBadGuy = selectBadGuy();

let gameLost = false;
let gameWon = false;
let basketCount = 0;
let dribbleCount = 0;
let myCharacter;

//GOOD GUYS//
const stockton = new GoodGuy("Stockton / Malone", 89, 90);
const mitchell = new GoodGuy("Mitchell / Gobert", 71, 115);

function GoodGuy(name, sp, hp) {
  this.name = name;
  this.sp = sp;
  this.hp = hp;
}

function BadGuy(name, bp, hp) {
  this.name = name;
  this.bp = bp;
  this.hp = hp;
}

// GAME INTRODUCTION //
console.log("Welcome to NBA Jam!!");

const playerName = ask.question("What is your name? ");

console.log(
  `Welcome ${playerName}, just like the old arcade game the goal is to win or not get knockout by a broken backboard. First one to 12 points wins. You vs the CPU. Game on! `
);

// CHOOSE A PLAYER //
function gameStart() {
  let charChoice = ask.keyIn(
    "Please select your team (m) Donovan Mitchell / Rudy Gobert, (j) John Stockton / Karl Malone, or (q) Quit? ",
    { limit: "mjq" }
  );
  if (charChoice === "m") {
    console.log(
      "Donovan & Rudy are a young exciting team who will put up a lot of points."
    );
    myCharacter = mitchell;
  } else if (charChoice === "j") {
    console.log(
      "John & Karl are two of the 50 greatest players of all time. They might even bring home a championship, well .. maybe."
    );
    myCharacter = stockton;
  } else if (charChoice === "q") {
    gameWon = false;
    console.log(
      "You can't quit! We kicked you out and you cried all the way home."
    );
  }
}
gameStart();

while (!gameWon && !gameLost) {
  if (basketCount === 12) {
    gameLost = false;
    gameWon = true;
    console.log("BOOMSHAKALAKA! Great shot! Game over! You win!.");
  } else {
    let choice = ask.keyIn(
      "Would you like to (d)Dribble, (s)Shoot, (c)Check Status or (q)Quit ",
      { limit: "dscq" }
    );
    if (choice === "d") {
      dribble();
    } else if (choice === "s") {
      shoot();
    } else if (choice === "c") {
      status();
    } else {
      gameLost = true;
      console.log("You quit! Come back soon.d");
    }
  }
}

// DRIBBLING THE BALL //
function dribble() {
  dribbleCount++;
  let random = Math.floor(Math.random() * 7);
  if (dribbleCount === 6) {
    const choice = ask.keyIn(
      `${playerName} you are in prime dunking range press (k) to Dunk!`,
      { limit: "k" }
    );
    if (choice === "k") {
      dunk();
    }
  } else if (random === 3) {
    badGuyEncounter();
  } else {
    console.log("Keep dribbling to get closer so you can go for the dunk. ");
  }
}

// CHECK STATUS //
function status() {
  console.log(`Here's your status 
  
  Health: ${myCharacter.hp}
  Shooting: ${myCharacter.sp}
  Points: ${basketCount}
  
  `);
}

// RANDOM BAD GUY GENERATOR //
function selectBadGuy() {
  const rodman = new BadGuy("Dennis Rodman", 75, 50);
  const artest = new BadGuy("Ron Artest", 45, 70);
  const laimbeer = new BadGuy("Bill Laimbeer", 30, 90);
  const badguys = [rodman, artest, laimbeer];
  let random = Math.floor(Math.random() * badguys.length);
  return badguys[random];
}

// ENCOUNTER BAD GUYS //
function badGuyEncounter() {
  let choice = ask.keyIn(
    `${myCharacter.name} got D'd up by ${currentBadGuy.name}! Would you like to (s) Shoot, (r) Run away, (c) Check Status (q) Quit`,
    { limit: "srcq" }
  );
  myCharacter.hp -= 5;
  if (choice === "s") {
    shoot();
  } else if (choice === "r") {
    run();
  } else if (choice === "q") {
    gameLost = true;
    console.log("You quit! Come back soon.d");
  } else if (choice === "c") {
    status();
  }
}

// SHOOTING THE BALL //
function shoot() {
  let hoops = Math.random();
  if (hoops < 0.5) {
    console.log(
      `You made a bucket! Two more points for team ${myCharacter.name} !`
    );
    basketCount += 2;
  } else if (hoops >= 0.5) {
    console.log(
      `You missed and ${currentBadGuy.name} got the ball and slammed you to the ground, minus 5 to your health. `
    );
    myCharacter.hp -= 5;
  }
}

// DUNK - SCORE TWO POINTS //
function dunk() {
  console.log("BOOMSHAKALAKA!");
  basketCount = basketCount + 2;
}

function run() {
  if (Math.random() < 0.5) {
    console.log(
      `${currentBadGuy.name} has caught you and thrown you to the ground, minus 5 to your health.`
    );
    myCharacter.hp -= 5;
  } else {
    console.log(`You are super fast and have outran ${currentBadGuy.name}! `);
  }
}
