import React, { Component } from 'react'

const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
        🦄
    </span>
)

class SelectMultiple extends Component {
    state = {
        techs: [ 'React' ]
    }

    handleChange = (event) => {
        const techs = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        )

        console.log(techs)
        this.setState({
            techs
        })
    }
    render () {
        let { techs } = this.state
        return(
            <div>
                <h1>
                    Etiqueta Select <Unicorn/>
                </h1>
                <form>
                    <select
                        value={techs}
                        onChange={this.handleChange}
                        multiple
                    >
                        <option value='Angular'>Angular</option>
                        <option value='React'>React</option>
                        <option value='Vue'>Vue</option>
                        <option value='Vanilla'>Vanilla</option>
                    </select>
                </form>
                <ul>
                    { techs.map(tech => (
                        <li key={tech}>
                            { tech }
                        </li>
                    )) }
                </ul>
            </div>
        )
    }
}
export default SelectMultiple