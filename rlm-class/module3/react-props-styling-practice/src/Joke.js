import React from "react"

function Joke(props){
    return(
        <div className="joke">
            <h2>Question: {props.question}</h2>
            <p>Punchline: {props.punchline}</p>
            <hr/>
        </div>
    )
}

export default Joke