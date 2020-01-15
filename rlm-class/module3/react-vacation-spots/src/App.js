import React from 'react'
import vacationSpots from './VacationSpots'
import Product from './Product'
import './App.css'

function App() {
  const vacationComponents = vacationSpots.map(item => <Product key={item.id} product={item}/>)
  return (
    <div>
      {vacationComponents}
    </div>
  );
}

export default App;
