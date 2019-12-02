const marioPest = document.mariopest;

marioPest.addEventListener("submit", function(event) {
  event.preventDefault();

  const goombas = marioPest.goombasNum.value;
  const bobombs = marioPest.bobombsNum.value;
  const cheepcheeps = marioPest.cheepcheepsNum.value;
  const total = Number(goombas * 5) + Number(bobombs * 7) + Number(cheepcheeps * 11);

  document.getElementById("submit").textContent = total;

})
