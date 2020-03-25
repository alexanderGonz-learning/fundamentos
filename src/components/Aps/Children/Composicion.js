import React from 'react'
import { Counter, Title, Button } from './componentsComposicion/Counter'
const App = () => {
  const hey = () => {
    alert('Hey que pasa')
  }
  return (
  <div>
    <Counter>
      <Title />
      <Title>
        {(clicks) => (
          <h1> Clicks: { clicks} </h1>
          )}
      </Title>
      <Button 
        type='increment'
        onIncrement={hey}
      />
      <Button 
        type='decrement'
      />
    </Counter>
  </div>
  )
}

export default App