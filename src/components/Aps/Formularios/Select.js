import React, { Component } from 'react'

const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
        🦄
    </span>
)

class Select extends Component {
    state = {
        tech: 'React'
    }

    handleChange = (event) => {
        this.setState({
            tech: event.target.value
        })
    }
    render () {
        return(
            <div>
                <h1>
                    Etiqueta Select <Unicorn/>
                </h1>
                <form>
                    <select
                        value={this.state.tech}
                        onChange={this.handleChange}
                    >
                        <option value='Angular'>Angular</option>
                        <option value='React'>React</option>
                        <option value='Vue'>Vue</option>
                        <option value='Vanilla'>Vanilla</option>
                    </select>
                </form>
                <h3>Tu stack favorito es {this.state.tech}</h3>
            </div>
        )
    }
}
export default Select
