document.addEventListener("mousedown", mouseDown);
const clicker = document.getElementById("clicker");

let clickCount = 0;
let timeLeft = 30;
const timerId = setInterval(startTimer, 1000);



function startTimer() {
  if (timeLeft === -1) {
    clearInterval(timerId);
    timesRunOut();
  } else {
    counter.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
startTimer()

function mouseDown() {
  clickCount++ 
  console.log(clickCount)
}

function timesRunOut(){
    alert(`Time has run out. You clicked ${clickCount} times`);
}


