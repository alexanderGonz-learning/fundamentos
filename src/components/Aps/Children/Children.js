import React, { Component } from 'react'
import './children.css'

class Parent extends Component {
  render () {
    // En un componente de clase los children llegan desde this.props
    const { children } = this.props

    // Children no es siempre un array
    // Si le pasamos solo un valor, sera del tipo del valor pasado
    // String, elemento, objeto, array
    // Son estructuras de datos opacos, porque no sabemos que tipo nos puede llegar.
    console.log(children);
    
    return(
      <div className='box'>
        <div className='box blue'>
          { children } {/* Error e consola porque no puede renderizar funciones*/}
        </div>
        <div className='box red'>

        </div>
      </div>
    )
  }
}

// Los children llegan desde las props y las conseguimos con destructuracion
/*const Parent = ({ children }) => {
  return(
    <div className='box'>
      <div className='box blue'>
        { children }
      </div>
      <div className='box red'>

      </div>
    </div>
  )
}*/

class App extends Component {
  render () {
    return (
      <div>
        <Parent>
          {/* A los children podemos pasarle cualquier tipo de valor: 
          texto, elementos,dentro de expresiones: arrays, objetos, funciones, templateStrings.
          Un hijo no es un salto de linea, los saltos y espacios seran trimeados. Los templateString si respetan los saltos de linea */}
          Hijo de 
           Texto
          <div>elementos</div>
          {['fresa', 'manzana', 'pera']}
          {/*{name: 'Alexander', age: '24', country: 'Spain'}*/} {/* Los objetos no pueden ser renderizados, pero si pasados */}
          {() => {}} {/* Las funciones no pueden ser renderizados, pero si pasados */}
          {`La suma 
          de 5 + 3 es ${5 + 3}`} {/* Children evalua los valores antes de pasarlos*/}

        </Parent>
      </div>
    )
  }
}

export default App
