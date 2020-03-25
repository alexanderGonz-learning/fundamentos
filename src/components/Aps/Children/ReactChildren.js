import React, { Component } from 'react'
import './children.css'

class Parent extends Component {
  render () {
    // En un componente de clase los children llegan desde this.props
    const { children: ch } = this.props //Renombramos la propChildren como ch

    // Children no es siempre un array
    // Si le pasamos solo un valor, sera del tipo del valor pasado
    // String, elemento, objeto, array
    // Son estructuras de datos opacos, porque no sabemos que tipo nos puede llegar.
    // console.log(children);

    const childrenArray = React.Children.toArray(ch) // Ahora siempre sera un array
    const childrenLenght = React.Children.count(ch) // Cuenta los children
    //const childrenOnly = React.Children.only(ch)  // Se asegura de que solo haya 1 Child, si no dispara un error
    console.log('Lenght de Children: ' + childrenLenght);


    // Recibe los children originales como parametro y una funcion como segundo
    // Devuelve un array con solo los hijos que puede renderizar
    const children = React.Children.map(ch, (child, index) => {
      if( index !== 0){ //Podeos renderizar solo el primer child, ingnorarlo
        return child
      }
    })

    // forEach no retorna un array
    const children2 = React.Children.forEach(ch, (child, index) => {
      console.log(child);
        return child
    })
    
    
    return(
      <div className='box'>
        <div className='box blue'>
          { children } {/* Ahora ya no hay error porque no recibe hijos que no se puedan renderizar*/}
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
          {() => {}} {/* Las funciones no pueden ser renderizados, pero si pasados */}
          {`La suma 
          de 5 + 3 es ${5 + 3}`} {/* Children evalua los valores antes de pasarlos*/}

        </Parent>
      </div>
    )
  }
}

export default App
