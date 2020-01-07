import React from "react"
import Joke from "./Joke"

function App(){
    return(
       <div className="joke-list">
           <Joke
                question="How do you keep an Utah Jazz player out of your yard?"
                punchline="Put up a basketball net."
            />

           <Joke 
                question="Why did Ron Artest leave the game early?"
                punchline="He wanted to beat the crowd."
           />

           <Joke 
                question="What should you do if you find three Los Angeles Lakers basketball fans buried up to their neck in cement?"
                punchline="Get more cement."
           />

           <Joke 
                question="What do you call an Utah Jazz player with a championship ring?"
                punchline="A thief."
           />

           <Joke 
                question="What does an Utah Jazz fan do when his team has won the NBA Finals?"
                punchline="He turns off the PlayStation."
           />
       </div> 
    )
}

export default App
