const readline = require("readline-sync");

let isTrapped = true;
let hasEscaped = false;

// const key = key
// const door = door
// const hole = hole

console.log("Hello how are you, welcome to the game");
const name = readline.question("What is your name? ");
console.log(
  `Welcome to the game ${name}, You are trapped in a room and the only way to escape is to find the key to unlock the door. `
);

while (isTrapped && !hasEscaped) {
  if (findKey == 1) {
    hasEscaped = true;
  } else {
    let choice = readline.keyIn(
      "Would you like to (l) look around the room, (h) put your hand in the hole or (d) try to open door? ",
      { limit: "lhd" }
    );
    if (choice === "l") {
      look();
    } else if (choice === "h") {
      hole();
    } else if (choice === "d")
      console/log("The door is locked you need a key.");
    }
  }
}

function look() {
  let random = Math.floor(Math.random() * 5);
  if ((random = 3)) {
    findKey();
  } else {
  }
}

function hole() {
  return isTrapped;
}

function findKey() {
  return hasEscaped;
}