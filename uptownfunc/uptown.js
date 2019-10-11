var lyrics = ["This", "hit", "that", "ice", "cold", 
"Michelle", "Pfeiffer", "that", "white", 
"gold", "This", "one", "for", "them", 
"hood", "girls", "Them", "good", "girls", 
"straight", "masterpieces", "Stylin'", 
"whilen'", "livin'", "it", "up", "in", 
"the", "city", "Got", "Chucks", "on", 
"with", "Saint", "Laurent", "Gotta", "kiss", 
"myself", "I'm", "so", "pretty"];

function func(arr){
    return str.join(' ')
}

func(lyrics)

function uptown(arr1){
    return arr1.reverse().join(" ")
}

uptown(lyrics)


const reverseLyrics = lyrics.reverse();
    console.log(reverseLyrics.join(" "))

function everyOtherWord(arr){
    const newArr = []
    for(let i = 0; i < arr.length; i+=2){
        if(i % 2 === 0){
            newArr.push(arr[i])
        }
}
return newArr.push.join(' ')

// console.log(everyOtherWord(lyrics))


