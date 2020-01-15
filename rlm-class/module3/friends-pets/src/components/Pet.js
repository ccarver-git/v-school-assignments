import React from "react";

function Pet(props) {
  console.log(props)
  return (
  <div>
    <h3 className="pets">{props.name} : {props.breed}</h3>
  </div>
  )
}

export default Pet;
