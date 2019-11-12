const ask = require("readline-sync");
let isAlive = true;
let hasWon = false;

function Enemy(name, hp, ap) {
  this.name = name;
  this.hp = hp;
  this.ap = ap;
}

//list of enemies
const dragon = new Enemy("Dragon", 75, 15);
const zombie = new Enemy("Zombie", 100, 20);
const puppy = new Enemy("Puppy Dog", 200, 10);
const enemies = [dragon, zombie, puppy];

let myCharacter;
let keyCount = 0;

function Hero(name, hp, ap, weapons) {
  this.name = name;
  this.hp = hp;
  this.ap = ap;
  this.weapons = weapons;
}

//list of heros
const unicorn = new Hero("Unicorn", 300, 10);
const ninja = new Hero("Ninja", 250, 15);
const heros = [unicorn, ninja];

let inventory = [];

console.log(
  "Hello and welcome! Your adventure begins now. You will encounter various enemines and your goal is find 3 Golden Keys. "
);

gameStart();

while (isAlive && !hasWon) {
  if (keyCount === 3) {
    hasWon = true;
    console.log(
      "You found 3 keys. You have saved the world. We do not stop playing because we grow old. We grow old because we stop playing."
    );
  }
  // The game keeps going even if you find three keys. I need to make it end.
  else {
    let choice = ask.keyIn(
      "Would you like to (e) explore, (i) Check Inventory, or (q) Leave Game? ",
      { limit: "eiq" }
    );
    if (choice === "e") {
      exlpore();
    } else if (choice === "i") {
      printInventory();
    } else {
      isAlive = false;
      console.log("You quit the game");
    }
  }
}

function printInventory() {
  console.log(`Here's your status 

Health: ${myCharacter.hp}
Keys: ${keyCount}

`);
}

// start the game and choose a character to be
function gameStart() {
  ask.keyIn(
    "Please choose a character to start your journey? [press c] continue",
    { limit: "c" }
  );

  let charChoice = ask.keyIn(
    "Would you like to be a (u) Unicorn, a (n) Ninja or (q) Leave Game? ",
    { limit: "unq" }
  );
  if (charChoice === "u") {
    console.log("You have selected Unicorn. Adventure awaits!");
    myCharacter = unicorn;
  } else if (charChoice === "n") {
    console.log("You have selected Ninja. Adventure awaits!");
    myCharacter = ninja;
  } else {
    isAlive = false;
    console.log("You quit the game");
  }
}

//when exploring there is a random chance to encounter an enemey and find a key
function exlpore() {
  let random = Math.floor(Math.random() * 5);
  if (random === 3) {
    enemyEncounter();
  } else if (random === 4) {
    keyFound();
  } else {
    console.log("You have covered some good ground, keep exlporing!");
  }
}

function keyFound() {
  console.log(
    "You got lucky and stumbled on a Golden Key! Keep looking for more"
  );
  keyCount = keyCount + 1;
}

//Encounter a random enemy
function enemyEncounter() {
  const currEnemy = selectEnemy();
  let choice = ask.keyIn(
    `${myCharacter.name} encountered a ${currEnemy.name}! Would you like to [f] Fight, [r] Run, or [q] Quit`,
    { limit: "frq" }
  );
  if (choice === "f") {
    fight(currEnemy);
  } else if (choice === "r") {
    run(currEnemy);
  } else {
    isAlive = false;
    console.log("you quit");
  }
}

function selectEnemy() {
  let random = Math.floor(Math.random() * enemies.length);
  return enemies[random];
}

//after encountering an enemey you will have a few optiosn to fight, run or quit.
function fight(enemy) {
  let attackPower;
  console.log(`Enemy HP: ${enemy.hp}. Your HP: ${myCharacter.hp}`);
  let choice = ask.keyIn(
    `${enemy.name} is a tough enemy. Would you like to [n] use Nurf gun, [r] Run away or [q] Quit`,
    { limit: "nrq" }
  );
  if (choice === "n") {
    const enemyAP = randomAttackPower(enemy.ap);
    const heroAP = randomAttackPower(myCharacter.ap);
    // get random attack power and health of enemy
    // get random attack power and health of hero

    // take down each person's health
    enemy.hp = enemy.hp - heroAP;
    myCharacter.hp = myCharacter.hp - enemyAP;

    // if enemy beats hero, game over
    if (myCharacter.hp <= 0) {
      isAlive = false;
      console.log("you died");
    }
    // if hero beats enemy, get key
    else if (enemy.hp <= 0) {
      console.log(`You defeated the ${enemy.name}, here's a key.`);
      keyCount = keyCount + 1;
    } else {
      // otherwise keep fighting
      fight(enemy);
    }
  } else if (choice === "r") {
    run(enemy);
  } else {
    isAlive = false;
    console.log("you quit");
  }
}

function randomAttackPower(max) {
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1) + min);

  // randomly hit the ememy and vice versa with a random power from the enemy back and forth until someone dies.
  // // if the enemey wins and lowers the health power to 0
  // if(myCharacter.hp === 0 then game over with cool death messge)
}

function run(enemy) {
  if (Math.random() < 0.5) {
    console.log("The enemey has caught up to you.");
    fight(enemy);
  } else {
    console.log("You out ran the enemy and escaped");
  }
  // You have escaped. Go back through while loop.
}
