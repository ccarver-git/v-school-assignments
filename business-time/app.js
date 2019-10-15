const form = document.getElementById("travel") 

form.addEventListener('submit', function(event){
    event.preventDefault();

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.location.value
    const restrictions = form.restrictions

    const allRestrictions = []

    for(let i = 0; i < restrictions.length; i++) {
        if(restrictions[i].checked) {
            allRestrictions.push(restrictions[i].value)
        }
    }
    
    alert(`First Name: ${firstName} 
    Last Name: ${lastName} 
    Age: ${age}
    Gender: ${gender} 
    Location: ${location}
    Restrictions: ${allRestrictions}`)
})