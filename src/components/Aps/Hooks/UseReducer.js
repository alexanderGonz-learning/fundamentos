import React, { useState, useReducer } from 'react'

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
        Hooks useReducer
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

// Dispatch ({ type: 'INCREMENT' title: 'algo' }) -> action
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...prevState,
        count: prevState.count + 1
      }
    
      case 'DECREMENT':
      return {
        ...prevState,
        count: prevState.count - 1
      }

      case 'SET_TITLE':
        return {
          ...prevState,
          title: action.title
        }

      default: 
      return prevState
  }
}

const initialState = {
  count: 0,
  title: 'Hola'
}

const App = () => {
  // const [ count, setCount ] = useState(0)
  // const [ title, setTitle ] = useState('Hola')
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleTitle = (e) => {
    dispatch({ 
      type: 'SET_TITLE',
      title: e.target.value
    })
  }

  return (
    <>
      <Header />
      <input 
        type='text'
        onChange={handleTitle}
        value={state.title}
      />
      <div>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
      <h1>
        { state.count } - { state.title }
      </h1>
    </>
  )
}

export default App