const form = document.addition 

form.addEventListener('submit', function(){
    event.preventDefault()

    const addOne = form.addOne.value
    const addTwo = form.addTwo.value

    document.getElementById('addAnswer')
    .textContent = Number(addOne) + Number(addTwo)
})

const formSub = document.subtraction

formSub.addEventListener('submit', function(){
    event.preventDefault()

    const subOne = formSub.subOne.value
    const subTwo = formSub.subTwo.value

    document.getElementById('subAnswer')
    .textContent = Number(subOne) - Number(subTwo)
})

const formDiv = document.division

formDiv.addEventListener('submit', function(){
    event.preventDefault()

    const divOne = formDiv.divOne.value
    const divTwo = formDiv.divTwo.value

    document.getElementById('divAnswer')
    .textContent = Number(divOne) / Number(divTwo)
})