import React, { useState, useEffect } from 'react'

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
        Hook useEffect (Controlar Ejecucion)
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
  const [ num, setNum ] = useState(0)
  const  [ emoji, setEmoji ] = useState('🦁')
  
  const addNum = () => setNum(num + 1)

  const toggleEmoji = () => {
    const nextEmoji = emoji === '🦁'? '🐺': '🦁'
    setEmoji(nextEmoji)
  }
  //Primer parametro: func(), segundo paramtro: 
  useEffect(() => {
    alert('useEffect')
  }, [ num, emoji ]) //no variable: se dispara 1 vez, variable(s): se dispara cuando variable(s) cambia

  return (
    <>
      <Header /> 
      <button onClick={addNum}>
        Add ({ num })
      </button>
      <button onClick={toggleEmoji}>
        Alternar Emoji
      </button>
      <h1>
        { emoji }
      </h1>
    </>
  )
}

export default App