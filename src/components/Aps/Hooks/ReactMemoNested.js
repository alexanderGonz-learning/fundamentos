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
        React.memo Nested
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


// React.memo() HOC Para que no se renderize el componente si no cambia
const Counter = React.memo(({ count }) => {
  console.log('%cRender <Counter />', 'color: blue');
  
  return(
    <h1>
      { count }
    </h1>
  )
})

const Title = React.memo(({ text }) => {
  console.log('%cRender <Title />', 'color: orangered');
  
  return(
    <h1>
      { text }
    </h1>
  )
})

//React.memo(componente, funcion con algoritmo de diferinciacion)
const TitleNested = React.memo(
  ({ info }) => {
    console.log('%cRender <TitleNested />', 'color: purple');
  
    return(
      <h1>
        { info.text }
      </h1>
    )
  },
  (prevProps, nextProps ) => {
    // True: NO se renderiza
    // False: SI se renderiza
    return prevProps.info.text === nextProps.info.text
  }
)


const App = () => {
  const [ title, setTitle ] = useState('')
  const [ count, setCount ] = useState(0)
 
  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  return ( 
    <>
      <Header />
      <input 
        type='text'
        onChange={handleInput}
      />
      <br />
      <button onClick={handleAdd}>
        Add
      </button>
      <Counter count={count} />
      <Title text={title}/>
      <TitleNested 
        info={{
          text: title
        }}
      />
    </>
  )
}

export default App