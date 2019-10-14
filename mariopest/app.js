const form = document.goombas

form.addEventListener('submit', function(){
    event.preventDefault()

    const goombas = form.howManyG.value
    // const howManyB = form.howManyB.value
    // const howManyC = form.howManyC.value

    document.getElementById('total')
    .textContent = Number(howManyG) + Number(howManyB) + Number(howManyC)
})