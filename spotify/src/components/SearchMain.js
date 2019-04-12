import React, { Component } from 'react'
import '../styles/SearchMain.css';

class SearchMain extends Component {
  render() {
    return (
      <div className="main">
        <div className="context">
          <div className="search">
            <input id="bus" name="busqueda" type="search" placeholder="Search..."/>
          </div>
        </div>
        <div className="search-results">
          <h1 className="h-text">Busca en Spotify</h1>
          <p className="p-text">Encuentra tus canciones, artistas, albumes, playlists y podcast favoritos.</p>
        </div>
      </div>
    )
  }
}

export default SearchMain;
