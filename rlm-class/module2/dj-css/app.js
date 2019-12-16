var box = document.getElementById("btn-one")
var audio1 = document.getElementById("audio1")

box.addEventListener('mouseover', function (){
    audio1.play()
})

box.addEventListener('mouseleave', function (){
    audio1.pause()
})

var box2 = document.getElementById("btn-two")
var audio2 = document.getElementById("audio2")

box2.addEventListener('mouseover', function (){
    audio2.play()
})

box2.addEventListener('mouseleave', function (){
    audio2.pause()
})

var box3 = document.getElementById('btn-three')
var audio3 = document.getElementById('audio3')

box3.addEventListener('mouseover', function (){
    audio3.play()
})

var box4 = document.getElementById('')