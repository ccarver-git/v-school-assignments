var legos = document.getElementById('building-legos')
console.log(legos)
console.dir(legos)

document.getElementById('title').innerHTML = 'LEGO DAY!'



const myBox = document.getElementById('myBox')

myBox.addEventListener('mouseover', mouseOver);
myBox.addEventListener('mouseout', mouseOut);
document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);
document.addEventListener('dblclick', doubleClick);
document.addEventListener('mouseScroll', mouseScroll);
document.addEventListener('keydown', keyDown);

function mouseOver(){
    myBox.style.backgroundColor = 'blue'
}                 

function mouseOut(){
    myBox.style.backgroundColor = 'white'
}

function mouseDown(){
    myBox.style.backgroundColor = 'red'
}

function mouseUp(){
    myBox.style.backgroundColor = 'yellow'
}

function doubleClick(){
    myBox.style.backgroundColor = 'green'
}

function mouseScroll(){
    myBox.style.backgroundColor = 'orange'
}

function keyDown(){
    event.which
}


console.log(myBox)
