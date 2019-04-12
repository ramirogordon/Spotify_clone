import React, { Component } from 'react';

import '../styles/LibraryNavigation.css';

class LibraryNavigation extends Component {

  changeTitle = (a) => {
    let title = a.target.value;
    this.props.handleChangeTitle(title)
  }

  render() {
    let {userName, userImageUrl } = this.props.dataUser;
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
          name="suggestion"
          value="Suggestions"
          type="button"/>
        <input 
          onClick={a => this.changeTitle(a)}
          name="songs"
          value="Songs"
          type="button"/>
        <input 
          onClick={a => this.changeTitle(a)}
          name="albumes"
          value="Albumes"
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
          <img className="face-user" src={userImageUrl} alt=""/>
          <p>{userName}</p>
        </div>
      </div>
    )
  }
}

export default LibraryNavigation;
