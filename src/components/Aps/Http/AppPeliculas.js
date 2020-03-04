import React, { Component } from 'react'

class AppPeliculas extends Component {
  state = {
    movie: {},
    isFetching: false
  }

  handleSubmit = (event) => {
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'
    event.preventDefault()

    this.setState({ isFetching: true })
    fetch(url + '&t=' + title)
      .then(res => res.json())
      .then(data => this.setState({movie: data, isFetching: false }))
  }

  render () {
    const { movie, isFetching } = this.state

    return(
      <div>
        <h1>AppPeliculas</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            placeholder='Titulo'
          />
          <button>Buscar</button>
        </form>
        { isFetching && (
          <h2>Cargando...</h2>
        )}
        { movie.Title && !isFetching && (
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


export default AppPeliculas
