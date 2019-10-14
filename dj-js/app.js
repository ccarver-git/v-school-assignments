const myBox = document.getElementById('myBox')

document.addEventListener('mouseover', mouseOver);
document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);
document.addEventListener('dblclick', doubleClick);
document.addEventListener('scroll', scroll);

function mouseOver(event) {
  event.which
  myBox.style.backgroundColor = 'blue'
}

function mouseDown() {
  myBox.style.backgroundColor = 'red'
}

function mouseUp() {
  myBox.style.backgroundColor = 'yellow'
}

function doubleClick() {
  myBox.style.backgroundColor = 'green'
}

function scroll() {
  myBox.style.backgroundColor = 'orange'
}

//need to add in the press the first letter of the colors (typing "r" on the keyboard for "red", for example)

console.log(myBox)