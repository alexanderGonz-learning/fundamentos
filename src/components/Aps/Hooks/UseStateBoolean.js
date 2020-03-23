import React, { Component, useState } from 'react'

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
        Hook useState (Boolean)
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
  const [ isActive, setActive ] = useState(true)

  const toggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <button onClick={toggle}>
        { isActive ? 'Desactivar' : 'Activar' }
      </button>
      { isActive && <Header /> }
    </>
  )
}

export default App