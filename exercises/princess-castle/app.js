class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }

const newCharacter = new Person (Mario, 5, Big, true, false)

setName(namePicked){
    console.log('Your name is Mario or Luigi');
    namePicked()
}

gotHit(){
    if(this.status === 'Small'){
        this.status = 'Dead'
        this.gameActive = false
    } else if (this.status === 'Big'){
        this.status = 'Small'
    } else if (this.status === 'Powered Up'){
        this.status = 'Big'
    }
}

gotPowerup(){
    if(this.status === 'Big'){
        this.status = 'Powered Up'
    } else if (this.status === 'Small'){
        this.status = 'Big'
    } else is (this.status === 'Powered Up'){
        this.status = 'hasStar'
        console.log('You got a star!')
    }
}

addCoin(){
    console.log('this will add coins to your total coins');

}

print(){
    console.log('shows your inventory ');
}
}

const myInterval = setInterval(()=>{
    function randRange (){
        let random = Math.floor(Math.random() * 4)
        if(random === 0){
            player.gotHit()
        } else if (random === 1){
            player.gotPowerup()
        } else {
            player.addCoin()
        }
    }

randRange()
