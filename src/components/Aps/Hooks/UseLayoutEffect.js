import React, { useState, useEffect, useLayoutEffect } from 'react'

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
        Hook useLayoutEffect
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
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    console.log('UseEffect 1');
    
  }, [ count ])
  useEffect(() => {
    console.log('UseEffect 2');
    
  }, [ count ])

  // useEffect -> Asincrono
  // useEffect -> Se ejecuta DESPUES de que se actualize el DOM 

  //useLayoutEffect -> Sincrono
  //useLayoutEffect ->  Se ejecuta ANTES de se actualize el DOM

  useLayoutEffect(() => {
    console.log('UseLayoutEffect 1');
    
  }, [ count ])
  useLayoutEffect(() => {
    console.log('UseLayoutEffect 2');
    
  }, [ count ])
  
  return (
    <>
      <Header /> 
      <button onClick={() => setCount(count + 1)}>
        Add ({ count })
      </button>
    </>
  )
}

export default App