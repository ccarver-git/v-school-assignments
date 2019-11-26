const travel = document.getElementById('travelForm')

travel.addEventListener('submit', (event) => {
    event.preventDefault()

    const firstName = travelForm.firstName.value;
    const lastName = travelForm.lastName.value;
    const age = travelForm.age.value;
    const location = travelForm.location.value;
    const gender = travelForm.gender.value;
    const food = travelForm.food;

    const traveler = []

    for(let i = 0; i < food.length; i++){
        if(food[i].checked) {
            traveler.push(food[i].value)
        }
    }

    alert(`First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Location: ${location}
    Gender: ${gender}
    Food Restrictions: ${traveler}`)
})

