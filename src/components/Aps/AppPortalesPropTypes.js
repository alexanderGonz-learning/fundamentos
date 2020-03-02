import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const noop = () => {alert('hey listen')} //Portales Modal - propTypes

class PortalModal extends Component {    
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }
  
  static defaultProps =  {
    name: 'Usuario',
    age: 99,
    onHello: noop
  }
  
  saluda = () => {
    this.props.onHello()
  }
  
  render () {
    const { name, age } = this.props
    if(!this.props.visible) {
      return null
    }
    
    console.log(`Mi nombre es ${name} y tengo ${age} años`)
    
    const styles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #667eea, #764ba2)',
      opacity: '0.95',
      color: '#FFF'
    }
    return ReactDOM.createPortal((
      <div style={styles}>
      {this.props.children}
      <button onClick={this.saluda}>
      Saluda
      </button>
      </div>
      ), document.getElementById('modal-root'))
    }
  }
  
  class AppPortalesPropTypes extends Component {
    state = {
      visible: false,
      num: 0
    }
    
    componentDidMount () {
      setInterval(() => {
        this.setState( prevState => ({
          num: prevState.num + 1
        }))
      }, 1000)
    }
    
    mostrar = () => {
      this.setState({ visible: true })
    }
    
    cerrar = () => {
      this.setState({ visible: false })
    }
    
    render () {
      return (
        <div>
        <button onClick={this.mostrar}>
        Mostrar
        </button>
        <PortalModal visible={this.state.visible} name={'Alexander'} age={24}>
        <button onClick={this.cerrar}>
        Cerrar
        </button>
        <h1>
        Hola desde un portal modal :) {this.state.num}
        </h1>
        </PortalModal>
        </div>
        )
      }
    }
    export default AppPortalesPropTypes