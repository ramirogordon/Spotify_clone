import React, { Component } from 'react';
import faceUser from '../img/face-user.jpg'

import '../styles/LibraryNavigation.css';

class LibraryNavigation extends Component {
  render() {
    return (
      <div className="librarynavigation-content">
        <div className="submenu">
        <input 
          name="playlist"
          value="Playlist"
          type="button"/>
        <input 
          name="stations"
          value="Stations"
          type="button"/>
        <input 
          name="songs"
          value="Songs"
          type="button"/>
        <input 
          name="albums"
          value="Albums"
          type="button"/>
        <input 
          name="artists"
          value="Artists"
          type="button"/>
        <input 
          name="podcasts"
          value="Podcasts"
          type="button"/>
        <input 
          name="videos"
          value="Videos"
          type="button"/>
        </div>
        <hr className="line"/>
        <div className="info-user">
          <img className="face-user" src={faceUser} alt=""/>
          <p>Jane Dylan</p>
        </div>
      </div>
    )
  }
}

export default LibraryNavigation;
