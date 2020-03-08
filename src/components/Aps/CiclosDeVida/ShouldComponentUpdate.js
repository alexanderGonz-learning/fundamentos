import React, { Component } from 'react'
import faker from 'faker'

const itemStyle = {
  padding: '1em',
  borderBottom: '1px solid #CCC',
  marginTop: '0.4em'
}

class Item extends Component {
  handleClick = () => {
    this.props.onRemove(this.props.item)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.item.id !== this.props.item.id
  }

  render () {
    const { item } = this.props
    console.log(`Render 🔥 ${item.text}` );
    
    return (
      <div style={itemStyle}>
        <button onClick={this.handleClick}>
          x
        </button>
        <span>
        { ` ${item.text}` }
        </span>
      </div>
    )
  }
}

class ShouldComponentUpdate extends Component {
  state = {
    list: []
  }

  agregar = (e) => {
    e.preventDefault()
    const text = e.target[0].value
    const id = faker.random.uuid()
    const pendiente = { text, id }

    this.setState(state => ({
      list: [
        ...state.list,
        pendiente
      ]
    }))

    e.target[0].value = ''
  }

  eliminar = (item) => {
    this.setState(state => ({
      list: state.list.filter(_item => {
        return item.id !==_item.id
      })
    }))
    
  }

  render () {
    return(
      <div>
        <h1>ShouldComponentUpdate</h1>
        <form onSubmit={this.agregar}>
          <input type="text" placeholder= "ingresa tu pendiente"/>
          <button>
            Agregar
          </button>
        </form>
        <div>
          { this.state.list.map(item => (
            <Item 
              key={item.id} 
              item={item}
              onRemove={this.eliminar}
            />
          ))}
        </div>
      </div>
    )
  }
}


export default ShouldComponentUpdate
