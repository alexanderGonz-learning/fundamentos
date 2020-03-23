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
        Hook useState
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
  const [ clicks, setClicks ] = useState(0)

  const addClciks = () => {
    setClicks(clicks + 1)
  }

  return (
    <>
      <Header />
      <button onClick={addClciks}>
        Clicks ({ clicks })
      </button>
    </>
  )
}

// class App extends Component { 
//   state = {
//     clicks: 0
//   }

//   addClicks = () => {
//     this.setState( state => ({
//       clicks: state.clicks + 1
//     }))
//   }

//   render () {
//     const { clicks } = this.state 
//     return (
//       <>
//         <Header />
//         <button onClick={this.addClicks}>
//           Clicks ({ clicks })
//         </button>
//       </>
//     )
//   }
// }

export default App