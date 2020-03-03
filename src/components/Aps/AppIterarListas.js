import React, { Component } from 'react'

class AppIterarListas extends Component {
    state = {
        fruits: [
            { name: 'Fresa', price: 5.4 },
            { name: 'Manzana', price: 0.4 },
            { name: 'Sandia', price: 2.9 },
            { name: 'Pera', price: 1.5 },
            { name: 'Kiwi', price: 2.5 },
            { name: 'Melon', price: 5.3 },
            { name: 'Cereza', price: 1.4 },

        ],
        frutaSeleccionada: {}
    }

    select = (frutaSeleccionada, event) =>{
        this.setState({
            frutaSeleccionada
        })
    }

    render () {
        const { fruits, frutaSeleccionada } = this.state
        return(
            <ul>
                { fruits.map(fruit => (
                    <li key={fruit.name}
                        onClick={this.select.bind(this, fruit)}
                        style={{
                            color: frutaSeleccionada.name === fruit.name
                                ? 'red'
                                : '#000'
                        }}
                    >
                        { fruit.name } - €{ fruit.price }
                    </li>
                ))}
            </ul>
        )
    }
}
export default AppIterarListas
