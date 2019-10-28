const readline = require("readline-sync");

let isAive = true;
let hasEscaped = false;

const key = key 
const door = door
const hole = hole

console.log('Hello how are you, welcome to the game');
const name = readline.question("What is your name? ");
console.log(`Welcome to the game ${name}, You are trapped in a room and the only way to escape is to find the key to unlock the door`)

while (isAlive && !hasWon){
  if (findKey == 1) {
    hasWon = true;}
  else {
    let choice = ask.keyIn(
      "Would you like to (l) look around the room, (h) put your hand in the hole or (d) try to open door? ",
      { limit: "lhd" }
    );
    if ( choice === "l") {
      look();
    } else if ( choice === "h") {
      hole();
    }
  }
}

function look(){
  let random = Math.floor(Math.random() * 6)
  if(random = 4) {
    findKey();
  } else {

  }
}

function findKey() {

}



// index = readlineSync.keyInSelect(roomOptions, 'which option');
//     console.log('Congrats, you escaped the room');

// function escapeRoom(){
//      if (roomOptions[index])
//  }
// console.log(index)