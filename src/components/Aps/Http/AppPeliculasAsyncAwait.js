import React, { Component } from 'react'
import axios from 'axios'

class AppPeliculasAsyncAwait extends Component {
  state = {
    movie: {},
    isFetching: false
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'

    this.setState({ isFetching: true })

    // const res = await axios.get(url, {
    //   params:{
    //     t: title
    //   }
    // })
    
    const res = await fetch(url + '&t=' + title)
    const movie = await res.json()
    this.setState({
      // movie: res.data,
      movie,
      isFetching: false
    })


  }

  render () {
    const { movie, isFetching } = this.state

    return(
      <div>
        <h1>AppPeliculasAsyncAwait</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            placeholder='Titulo'
          />
          <button>Buscar</button>
        </form>
        { isFetching && ( //CONDICIONAL PARA MOSTRAR EL MENSAJE
          <h2>Cargando...</h2>
        )}
        { movie.Title && !isFetching && ( //CONDICIONAL PARA MOSTRAR EL POSTER
          <div>
            <h1>{ movie.Title }</h1>
            <p>
              { movie.Plot}
            </p>
            <img 
              src={movie.Poster} 
              alt='Poster'
              style={{
                width: '150px'
              }}
            />
          </div>
        )}
      </div>
    )
  }
}


export default AppPeliculasAsyncAwait
