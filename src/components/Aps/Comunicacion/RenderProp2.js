import React, { Component } from 'react'
import propTypes from 'prop-types'

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
        ( Hijo a Padre )
      </div>
      <div style={subtitleStyles}>
        Render Prop Ejemplo 2
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

class Resize extends Component {
  static propTypes = {
    render: propTypes.func.isRequired
  }

  state= {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize6 )
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  render () {
    const { width, height } = this.state
    const { render } = this.props

    return render ({ width, height })
  }
}

class RenderProp2 extends Component {

  render () {
    return(
      <div style={boxStyles}>
        <Header />
        <Resize 
          render={({ width, height }) => {

            return (
              <div>
                <h1>Width: { width } </h1>
                <li>{ height }</li>
              </div>
            )
          }}
        />
      </div>
    )
  }
}


export default RenderProp2