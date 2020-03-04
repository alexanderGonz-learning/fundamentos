import React, { Component } from 'react'

const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
        🦄
    </span>
)

class InputNoControlado extends Component {

    handleSubmit = (event) =>{
        event.preventDefault()
        const nombre = event.target[0].value
        const email = event.target[1].value
        //Manejo de datos
        this.props.onSend({ nombre, email })
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor='nombre'>Nombre: </label>
                    <input
                        type='text'
                        placeholder='Nombre'
                        id='nombre'
                    />
                </p>
                <p>
                    <label htmlFor='email'>Email: </label>
                    <input
                        type='text'
                        placeholder='Email'
                        id='email'
                    />
                </p>
                <button>
                    Enviar
                </button>
            </form>
        )
    }
}

class InputNoControladoFormulario extends Component {
    send = (data) => {
        console.log(data)
    }
    render () {
        return(
            <div>
                <h1>Inputs No controlados con Formularios <Unicorn /></h1>
                <InputNoControlado
                    onSend={this.send}
                />
            </div>
        )
    }
}
export default InputNoControladoFormulario
