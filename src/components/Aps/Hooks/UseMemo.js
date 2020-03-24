import React, { useState, useMemo } from 'react'

// No optimizar de manera temprana, solo cuando haya problemas de rendimiento

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
        Hooks useMemo
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

const SuperList = ({ list, log }) => {
  console.log('%cREnder <Superlist /> ' + log, 'color: green');
  
  return (
    <ul>
      { list.map(item => (
        <li key={ item }>
          { item }
        </li>
      ))}
    </ul>
  )
}

const App = () => {
  const [ clicks, setClicks ] = useState(0)

  const add = () => {
    setClicks(clicks + 1)
  }

  const memoList = useMemo(() => { // Esta lista estara memorizada y solo se renderizara una vez
      return (
        <SuperList 
          list={[ 1, 2, 11, 24, 56]}
          log='Memorizado'
        />
      )
  }, []) // Se renderizara una vez. Si pasamos una variable, renderiza camdo esa variable cambie

  return (
    <>
      <Header />
      <button onClick={add}>
        clicks ({ clicks })
      </button>
      <SuperList 
        list={[ 'orange', 'pink', 'purple', 'yellow' ]}
        log='Normal'
      />
      { memoList }
    </>
  )
}

export default App