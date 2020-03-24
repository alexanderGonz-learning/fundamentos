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
        Hooks Personalizados
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

// Siempre usar la palabra 'use' y ser declarativos
const useSizes = () => { 
  const [ width, setWidth ] = useState(window.innerWidth)
  const [ height, setHeight ] = useState(window.innerHeight)

  const handleResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  // Agregar listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    //Limpiar cuando se desonte
    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, []) // Lista de dependencias para que se vuelva a disparar

 //Para que la info se pueda consumir desde cualquier componente se tiene que pasar en el return del hook
  return { //Podemos usar lo que queramos, en este caso es un objeto 
    width,
    height
  }

}


const App = () => {
  const { height, width } = useSizes() //Este es mi hook personalizado

  return (
    <>
      <Header />
      <h1>
        Width: { width }px Height: { height }px
      </h1>
    </>
  )
}

export default App