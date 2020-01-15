import React from 'react'
import Pet from './Pet'

function Friend(props) {
    console.log(props)
    const mappedPets = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)
    return (
        <div>
           <h1>{props.name}</h1>
           <h2>{props.age}</h2>
           <div>{mappedPets}</div>
        </div>
    )
}

export default Friend

// props 
// const props = {}