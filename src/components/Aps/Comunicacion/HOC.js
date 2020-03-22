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

const withCounter = (Comp) => {
  return class extends Component {
    state = {
      num: 0
    }

    add = () => {
      this.setState(state => ({
        num: state.num + 1
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

class HOC extends Component {

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


export default withCounter(HOC)