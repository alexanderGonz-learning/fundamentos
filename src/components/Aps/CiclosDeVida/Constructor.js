import React, { Component } from 'react'

class Contador extends Component {
  /*constructor (props) {
    super(props)

    this.agregar = this.agregar.bind(this)

    this.title = React.createRef()

    this.state= {
      message: props.message ? props.message :'Contador',
      num: props.num
    }
  }*/
  title = React.createRef()

  state= {
    message: this.props.message ? this.props.message : '',
    num: this.props.num
  }

  agregar = () => {
    console.log(this.title);
    
    this.setState(state => ({
      num: state.num + 1
    }))
  }

  render () {
    return(
      <div>

        <h2 
          ref={this.title}
        >
          { this.state.message }
        </h2>
        <button onClick={this.agregar}>
          Click ({ this.state.num})
        </button>
      </div>
    )
  }
}

class Constructor extends Component {
 
  render () {
    return(
      <div>
        <h1>Ciclos de Vida: Constructor </h1>
        <Contador num={1200} message={'Contador'} />
        <Contador num={200} />
      </div>
    )
  }
}


export default Constructor
