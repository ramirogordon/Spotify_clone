import React, { Component } from 'react';
import userFace from '../img/face-user.jpg';

import '../styles/LibraryNavigation.css';

class LibraryNavigation extends Component {

  changeTitle = (a) => {
    let title = a.target.name;
    this.props.handleChangeTitle(title)
  }

  render() {
    let {userName, userImageUrl } = this.props.dataUser;
    let userImage = userImageUrl ? userImageUrl : userFace;
    return (
      <div className="librarynavigation-content">
        <div className="submenu">
        <input 
          onClick={a => this.changeTitle(a)}
          name="playlist"
          value="Playlist"
          type="button"/>
        <input 
          onClick={a => this.changeTitle(a)}
          name="discover"
          value="Discover"
          type="button"/>
        <input 
          onClick={a => this.changeTitle(a)}
          name="songs"
          value="Songs"
          type="button"/>
        <input 
          onClick={a => this.changeTitle(a)}
          name="albums"
          value="Albums"
          type="button"/>
        <input 
          onClick={a => this.changeTitle(a)}
          name="artists"
          value="Artists"
          type="button"/>
        <input 
          onClick={a => this.changeTitle(a)}
          name="releases"
          value="Releases"
          type="button"/>
        </div>
        <hr className="line"/>
        <div className="info-user">
          <img className="face-user" src={userImage} alt=""/>
          <p>{userName}</p>
        </div>
      </div>
    )
  }
}

export default LibraryNavigation;
