import React, { Component } from 'react'

const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
        🦄
    </span>
)

class InputNoControlado extends Component {
    nombre = React.createRef()
    email = React.createRef()

    handleClick = () =>{
        const nombre = this.nombre.current.value
        const email = this.email.current.value

        //MANEJO DE DATOS
        this.props.onSend({ nombre, email })
    }
    render () {
        return (
            <div>
                <input
                    type='text'
                    ref={this.nombre}
                    placeholder='Nombre'
                />
                <input
                    type='text'
                    ref={this.email}
                    placeholder='Email'
                />
                <button onClick={this.handleClick}>
                    Enviar
                </button>
            </div>
        )
    }
}

class InputNoControladoRefs extends Component {
    send = (data) => {
        console.log(data)
    }
    render () {
        return(
            <div>
                <h1>Inputs No controlados Refs <Unicorn /></h1>
                <InputNoControlado
                    onSend={this.send}
                />
            </div>
        )
    }
}
export default InputNoControladoRefs
