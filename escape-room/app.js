const readline = require("readline-sync");

let isTrapped = true;
let hasEscaped = false;
let keyCount = 0;

console.log("Hello how are you, welcome to the game");
const name = readline.question("What is your name? ");
console.log(
  `Welcome to the game ${name}, You are trapped in a room and the only way to escape is to find the key to unlock the door. `
);

while (isTrapped && !hasEscaped) {
  if (keyCount === 1) {
    hasEscaped = true;
    isTrapped = false;
    console.log(
      "You found a key and can unlock the door. Congrats! Thanks for playing! "
    );
    // the games keep going and doesnt end
  } else {
    let choice = readline.keyIn(
      "Would you like to (l) look around the room, (h) put your hand in the hole or (d) try to open door? ",
      { limit: "lhd" }
    );
    if (choice === "l") {
      look();
    } else if (choice === "h") {
      hole();
    } else if (choice === "d"){
      door();
    }
  }
}

function look() {
  let random = Math.floor(Math.random() * 5);
  if (random == 4) {
    findKey();
  } ;
}

function hole() {
  isTrapped = false;
  console.log("You have choosen poorly and must meet your inevitable death. You have been killed by soemthing in the hole. dun dun dun!")
}

function door() {
  console.log("Sorry this door is locked. You need a key to unlock the door.");
}

function findKey() {
  console.log(
    "You found a key! Yeah! Now you can unlock the door and escape! Thanks for playing the game! "
  );
  keyCount = keyCount + 1;
}
