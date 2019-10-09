var lyrics = ["This", "hit", "that", "ice", "cold", 
"Michelle", "Pfeiffer", "that", "white", 
"gold", "This", "one", "for", "them", 
"hood", "girls", "Them", "good", "girls", 
"straight", "masterpieces", "Stylin'", 
"whilen'", "livin'", "it", "up", "in", 
"the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
"myself", "I'm", "so", "pretty"];

const reverseLyrics = lyrics.reverse();
    console.log(reverseLyrics.join(" "))




//EVENT LISTENERS   

// console.log(document)

// const myBox = document.getElementById('box')
// const tagBox = document.getElementsByTagName ('div')
// const classBox = document.getElementsByClassName('boxes')

//html collection is not an array. 

const myBox = document.getElementById('box')
const myText = document.getElementById('textBox')

myBox.addEventListener('click', function(){  //this is a method
    this.style.backgroundColor = 'blue'
}

myBox.addEventListener('change', function(){ 
    myBox.style.backgroundColor = 'red'
}

document.addEventListener('keypress', function(e){
    if(e.kley == 'y'){
        myBox.style.backgroundColor = 'yellow'
    }else if (e.key === 'g'){
        myBox.style.backgroundColor = 'green'

    }
}



//addEventListener //this is a function