const person = {
    name: 'Rupert',
    age: 34,
    hobbies: [
        {
            name: 'Skiing',
            skillLevel: 'Expert',
            favPlaces: ['Colorado', 'Utah', 'Canada']
        },{
            name: 'Kayaking',
            skillLevel: 'Professional',
            favPlaces: ['Idaho', 'Montana']
        },{
            name: 'Mountain Biking',
            skillLevel: 'Novice',
            favPlaces: ['St.George', 'Corner Canyon', 'LCC']
        }
    ],
    hasHair: false
}

// How would you access age?

console.log(person.age)

// How would you access 'Kayaking'?

console.log (person.hobbies[1].name)

// How would you access 'LCC' ?

console.log (person.hobbies[2].favPlaces[2])


