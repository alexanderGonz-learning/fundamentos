import React, { useState, useCallback } from 'react'

// Evitar crear nuevas funciones con cada renderizado. 
// Se usa en combinacion con React.memo 
// para que un componente solo se rendericen si sus props cambian

// Muchas veces el beneficio no es significactyivo, 
// solo optimizar cuando hay problemas de rendimiento o vaya lento

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
        Hooks useCallback
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

const Button = React.memo(({ children, callback }) => { // children no cambia y callback cambia con useCallback

  const getRandomColor = () => '#' + Math.random().toString(16).slice(2,8)

  const styles = {
    padding:'1em',
    fontSize: '20px',
    background: getRandomColor()
  }

  return (
    <button 
      style={styles} 
      onClick={callback}
    >  
      { children }
    </button>
  )
})

const App = () => {
  const [ a, setA ] = useState(0)

  const incrementA = useCallback(() => { // useCallback devuelve una funcion memorizada
    setA(a => a + 1)
  },[]) // No variables: se ejecuta 1 vez. Variable(s): se ejecuta cuando la variable(s) cambia
  
  return (
    <>
      <Header />
      <Button callback={incrementA}>
        Increment A
      </Button>
      <h1>
        a: { a }
      </h1>
    </>
  )
}

export default App