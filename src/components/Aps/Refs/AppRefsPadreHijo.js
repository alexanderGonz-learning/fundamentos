import React, { Component } from 'react'

const FancyInput = React.forwardRef((props, ref) => (
  <div>
  <input type="text" ref={ref} defaultValue={`${props.name} - ${props.age}` }/>
  </div>
))
  
class AppRefsPadreHijo extends Component {
  entrada = React.createRef()
    
  componentDidMount () {
    console.log(this.entrada);
  }
    
  render () {
    return(
      <div>
        <h1>App Refs Padre -> Hijo 🦄</h1>
        <FancyInput name="Alexander" ref={this.entrada} age="24"/>
      </div>
    )
  }
}
export default AppRefsPadreHijo
    