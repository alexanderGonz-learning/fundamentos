import React, { Component } from 'react'
const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
        🦄
    </span>
)
class Checkbox extends Component {
    state = {
        active: true
    }

    handleChange = (event) => {
        this.setState({
            active: event.target.checked
        })
    }

    render () {
        return(
            <div>
                <form>
                    <input
                        type="checkbox"
                        checked={this.state.active}
                        onChange={this.handleChange}
                        id={'mostrar'}
                    />
                    <label htmlFor="mostrar"> Mostrar</label>
                </form>
                { this.state.active && (
                    <h1>
                        Etiqueta Checkbox <Unicorn/>
                    </h1>
                )}
            </div>
        )
    }
}
export default Checkbox
