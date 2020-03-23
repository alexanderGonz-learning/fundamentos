import React, { Component } from 'react'

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      <div>
        { `(   Hijo <--> Padre  )` }
      </div>
      <div style={subtitleStyles}>
        HOC
      </div>
      <div style={subtitleStyles}>
        High Order Component
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

  //Primera forma, segundo parametro recibe la config devulve una clase anomina 
const withCounter = (Comp) => { //withCounter = (Comp, config) => {
    
  // return class extends Component {

      //Segunda forma, devuelve una funcion anomima cuyo primer parametro es la config
    return(config) => class extends Component {
    state = {
      num: config.clicks
    }

    add = () => {
      this.setState(state => ({
        num: state.num + config.sumClicks
      }))
    }
    
    render () {
      return (
        <Comp 
          num={this.state.num}
          add={this.add}
        />
      )
    }
  }
}

class HOCConfiguracion extends Component {

  render () {
    const { num, add } = this.props
    
    return(
      <div style={boxStyles}>
        <Header />
      <h1>{ num }</h1>
      <button onClick={add}>
        ADD 
      </button>
      </div>
    )
  }
}

    //Primera forma con un objeto de configuracion como segundo parametro
// export default withCounter(HOCConfiguracion, {
//   clicks: 2500,
//   sumClicks: 3
// })

    //Segunda forma, hacer una doble ejecucuion y en la segunda pasar el objeto de config
  export default withCounter(HOCConfiguracion)({
    clicks: 25,
    sumClicks: 5
  })  