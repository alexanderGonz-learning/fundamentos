import React, { forwardRef ,useImperativeHandle, useRef, useState } from 'react'

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
        Hooks useImperativeHandle
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

const FancyInput = forwardRef((props, ref) => { // Aqui recibimos la ref del padre
  const [ text, setText ] = useState('***')
  const entrada = useRef() // Ref 2, la usaremos para el focus 

  useImperativeHandle(ref, () => ({ // Estos son los metodos a los que el padre puede acceder desde la ref
    dispatchAlert: () => {
      alert('Hola')
    },

    setParragraph: (message) => {
      setText(message)
    },

    focusInput: () => {
      entrada.current.focus()  // Aqui usamos la Ref2 
    }
  }))

  return (
    <div>
      <p>{ text }</p>
      <input 
        type='text'
        ref={entrada}
      />
    </div>
  )
})

const App = () => {
  const fancyInput = useRef()

  const handleClick = () => { //Estos son los metodos que useImperativeHandle del hijo nos permite usar
    fancyInput.current.dispatchAlert()
    fancyInput.current.setParragraph('Hola desde <App />')
    fancyInput.current.focusInput()

    
  }

  return (
    <>
      <Header />
      <FancyInput ref={fancyInput} /> { /* Aqui le pasamos la ref al componente Hijo */}
      <button onClick={handleClick}>
        Dispatch
      </button>
    </>
  )
}

export default App