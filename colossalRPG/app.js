const ask = require('readline-sync')
let isAlive = true;
let hasWon = false;

function Enemy (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const witch = new Enemy('The Wicked Witch of the West', 10, 3)
const lex = new Enemy('Lex Luthor', 100, 20)
const tom = new Enemy('Tom Riddle', 400, 40)
const enemies = [witch, lex, tom]

function Hero (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

const unicorn = new Hero('Unicorn', 100, 10)
const monkey = new Hero('Monkey', 45, 5)
const ninja = new Hero('Ninja', 65, 15)
const heros = [unicorn, monkey, ninja]

let inventory = []

console.log('Hello and welcome! Your adventure begins now. You will encounter various enemines and your goal is find 3 keys to save the world. ')

ask.question('Please choose a character to start your journey (push enter to continue) ')

let charChoice = ask.keyIn('Would you like to be a (u) Unicorn, a (m) Monkey, a (n) Ninja or (q) Leave Game? ', {limit: 'umnq'} )
    if(charChoice === 'u'){
       console.log("You have selected Unicorn. Your secet weapon is your rainbow tail. Good Luck!")
       walk()
    }else if (charChoice === 'm'){
        console.log("You have selected Monkey. Your secret weapon is your loud scream. Good luck!")
    }else if (charChoice === 'n'){
        console.log("You have selected Ninja. Your secret weapon. Good Luck!")
}

while(isAlive && !hasWon){
    let choice = ask.keyIn('Would you like to (e) explore, (i) Check Inventory, or (q) Leave Game? ', {limit: 'eiq'} )
    if(choice === 'e'){
        walk()
    }else if (choice === 'i'){
       printInventory()
    }else {
        isAlive = false
        console.log('You quit the game')
    }
}

function walk (){
    let random = Math.floor(Math.random()*6)
    if(random === 3){
        enemyEncounter()
    }else if(random === 5){
        keyFound()
    }else{
        console.log('You continue walking safely')
    }
}

function keyFound(){
    let randomKey = Math.floor(Math.random()*5)
    //gets stored in inventory - once inventory has 3 keys the hero/player wins the game. 
    if(randomKey === 5){
        keyStored()
    }
}

function keyStored(){
    if(keyInventory === 3)
        return hasWon
}

function enemyEncounter(){
    const currEnemy = selectEnemy()
    let choice = ask.keyIn(`You encountered ${currEnemy.name}! Would you like to [a] Attack, [r] Run, or [q] Quit`, {limit: 'arq'})
    if(choice === 'a'){
        fight()
    }else if (choice === 'r'){
        run()
    }else{
        isAlive = false
        console.log('you quit')
    }
}

function selectEnemy(){
    let random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}

