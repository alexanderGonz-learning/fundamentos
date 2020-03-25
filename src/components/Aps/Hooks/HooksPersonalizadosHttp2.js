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
        Hooks Personalizados Http 2
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

// Mi hook personalizado
const useFetch = (url, initialState = []) => { 
  const [ data, setData ] = useState(initialState)
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    setFetching(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setFetching(false)
      })

  }, [ url ]) // Dependencia para que se vuelva a ejecutar

  return [ // Devolvemos un array para que al consumir este hook, estos valores puedan ser renombradas
    data,
    isFetching
  ]
}

const App = () => {
  const [ clicks, setClicks ] = useState(1)
  const [ user, isLoading ] = useFetch('https://jsonplaceholder.typicode.com/users/' + clicks, {})

  const add = () => setClicks(clicks + 1)
  return (
    <>
      <Header />
      <button onClick={add}>
        Next ({ clicks })
      </button>
      { isLoading ? <h1>Cargando...</h1> : (
        <>
          <h1>{ user.name }</h1>
          <p>{ user.phone }</p>
         </>
      )}
    </>
  )
}

export default App