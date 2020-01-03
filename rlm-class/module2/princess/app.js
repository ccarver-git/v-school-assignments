let intervalId;

class Player {
  constructor(name) {
    this.hasStar = false;
    this.gameActive = true;
    this.name = name;
    this.totalCoins = 0;
    this.status = "small";
  }

  gotHit() {
    if (this.status === "small") {
      this.gameActive = false;
      console.log("You are dead");
      clearInterval(intervalId)
    } else if (this.status === "big") {
      this.status = "small";
    } else if (this.status === "powered up") {
      this.status = "big";
    }
  }

  gotPowerup() {
    if (this.status === "small") {
      this.status = "big";
      console.log("You grew big!");
    } else if (this.status === "big") {
      this.status = "powered up";
      console.log("You got powered up!");
    } else if (this.status === "powered up") {
      this.hasStar++;
      console.log("Congratulatoins! You got a star!");
    }
  }

  addCoin() {
    this.totalCoins++;
  }

  print() {
    console.log(`
    Name: = ${this.name}
    Status: ${this.status}
    Total Coins: ${this.totalCoins}

    `);
  }
}

const player = new Player("Mario");

intervalId = setInterval(() => {
  if (player.gameActive) {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      player.gotHit();
    } else if (randomNumber === 1) {
      player.gotPowerup();
    } else {
      player.addCoin();
    }
    player.print();
  }
}, 1000);
