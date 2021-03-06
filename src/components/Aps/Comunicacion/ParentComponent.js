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
        ( Hermanos )
      </div>
      <div style={subtitleStyles}>
        Parent Component
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
const blueStyles = {
  ...boxStyles,
  border: '1px solid blue'
}
const redStyles = {
  ...boxStyles,
  border: '1px solid red'
}
class ComponentA extends Component {
  render () {
    const { num } = this.props
    return (
      <div 
        style={blueStyles}
      >
        <button onClick={this.props.onAdd}>
          Component A ( {num} )
        </button>
      </div>
    )
  }
}

class ComponentB extends Component {
  render () {
    const { num } = this.props
    return (
      <div 
        style={redStyles}
      >
        <button onClick={this.props.onAdd}>
          Component B ( {num} )
        </button>
      </div>
    )
  }
}
class ParentComponent extends Component {
  state = {
    countA: 0,
    countB: 0
  }

  handleAddA = () => {
    this.setState({
      countA: this.state.countA + 1
    })
  }

  handleAddB = () => {
    this.setState({
      countB: this.state.countB + 2
    })
  }

  render () {
    const { countA, countB } = this.state
    return(
      <div 
        style={boxStyles}
        onClick={this.handleClick}
      >
        <Header />
        <ComponentA 
          num={countA}
          onAdd={this.handleAddB}
        />
        <ComponentB 
          num={countB}
          onAdd={this.handleAddA}
        />
      </div>
    )
  }
}


export default ParentComponent
