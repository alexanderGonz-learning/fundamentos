import React, { Component } from 'react'

class AppIterarObjetos extends Component {
  state = {
    user:{
      name: 'Alexander Gonzalez',
      country: 'España',
      twitter: '@_AlexanderGonz',
      youtube: 'AlexanderGonz96'
    }
    
  }
  render () {
    const { user } = this.state
    const keys = Object.keys(user)
    return(
      <div>
      <h3>Iterando propiedades de Objetos</h3>
      <ul>
      {keys.map(key => (
        <li>
        <strong>{key}</strong>: { user[key] }
        </li>
        ))}
        </ul>
        </div>
        )
      }
    }
    
    
    
    
export default AppIterarObjetos