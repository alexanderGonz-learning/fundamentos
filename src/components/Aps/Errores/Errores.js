import React, { Component } from 'react'

class Boton extends Component {
  state = {
    dispararError: false
  }

  dispatchError = () => {
    this.setState({
      dispararError: true
    })
  }

  render () {

    if(this.state.dispararError) {
      throw new Error('Lo siento he fallado 🔥🔥🔥')
    }

    return (
      <button onClick={this.dispatchError}>
        Boton con Bug
      </button>
    )
  }
}



class LimiteErrores extends Component {
  state = {
    tieneError: false
  }
  componentDidCatch (error, errorInfo) {
    this.setState({
      tieneError: true,
      error
    })
  }

  render () {
    if(this.state.tieneError) {
      return (
        <div>
          Wops! Algo ha salido mal. Recarga la pagina y si el problema persiste
          contacta con el equipo de soporte.
          <div
            style={{
              color: 'orangered'
            }}
          > 
            {this.state.error && this.state.error.toString()}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}



class Errores extends Component {
    state = {
        
    }
    render () {
        return(
           <div>
               <LimiteErrores>
                <h1>Errores</h1>
                <Boton />
               </LimiteErrores>
               <LimiteErrores>
                <h1>Errores</h1>
                <Boton />
               </LimiteErrores>
               <LimiteErrores>
                <h1>Errores</h1>
                <Boton />
               </LimiteErrores>
           </div>
        )
    }
}
export default Errores
