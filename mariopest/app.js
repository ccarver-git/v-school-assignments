const form = document.goombasForm
const form2 = document.bobombsForm
const form3 = document.cheepCheeps

const button = document.getElementById("submit")

button.addEventListener('click', function(event){
    event.preventDefault()

    let goombas = form.howManyG.value
    let bobombs = form2.howManyB.value
    let cheepCheeps = form3.howManyC.value

    document.getElementById('total')
    .textContent = Number(goombas * 5) + Number(bobombs * 7) + Number(cheepCheeps * 11)
})

