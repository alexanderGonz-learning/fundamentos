import React, { Component } from 'react'

const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
        🦄
    </span>
)

class InputControlado extends Component {
    state = {
        text: '',
        color: '#555555'
    }

    actualizar = (event) => {
        const text = event.target.value
        let color = 'green'
        if(text.trim() === '') {
            color = '#555555'
        }
        if(text.trim() !== '' && text.length < 5) {
            color = 'red'
        }

        this.setState({ text, color})

        //Propagando datos al padre
        this.props.onChange(this.props.name, text)
    }
    render () {
        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }
        return (
            <input
                type='text'
                value={this.state.text}
                onChange={this.actualizar}
                style={styles}
                name={this.props.name}
                placeholder={this.props.placeholder}
            />
        )
    }
}

class AppInputControlado extends Component {
    state = {
        nombre: '',
        email: ''
    }
    actualizar = (idInput, text) => {
        this.setState({
            [idInput] : text
        })
    }
    render () {
        return(
            <div>
                <h1>Inputs Controlados <Unicorn /></h1>
                <InputControlado
                    onChange={this.actualizar}
                    name={'nombre'}
                    placeholder={'Tu Nombre'}
                />
                <br /> <br />
                <InputControlado
                    onChange={this.actualizar}
                    name={'email'}
                    placeholder={'Email'}
                />
                <h2>Nombre: { this.state.nombre }</h2>
                <h2>Email: { this.state.email }</h2>
            </div>
        )
    }
}
export default AppInputControlado
