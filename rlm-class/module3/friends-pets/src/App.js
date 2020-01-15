import React from 'react'
import Friend from './components/Friend'
import friendList from './data'
import './App.css'

function App() {
  const mappedFriends = friendList.map(friend => {
    return (
      <Friend name={friend.name} age={friend.age} pets={friend.pets}/>
    )
  })
  return (
    <div>
      {mappedFriends}
    </div>
  );
}

export default App
