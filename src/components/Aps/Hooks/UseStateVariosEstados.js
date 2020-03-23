import React, { useState } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hook useState (Varios Estados)
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

const App = () => {
  //[ value, func() ]
  const [ clicks, setClicks ] = useState(25)
  const [ title, setTitle ] = useState('Hey todo bien?')

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <Header /> 
      <input 
        type="text"
        value={title}
        onChange={handleInput}
      />
      <button onClick={addClicks}>
        Clicks ({ clicks })
      </button>
      <h3>{ title }</h3>
    </>
  )
}

export default App