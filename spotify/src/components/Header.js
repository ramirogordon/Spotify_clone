import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import spotifyLogo from '../img/spotify_logo.png';

// Styles
import '../styles/Header.css';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
        <Link className="nav-link" to="/">
          <img className="img-logo" src={spotifyLogo} alt="spotify_logo"/>
        </Link>
          <div className="nav">
            <ul>
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/search">Search</Link>
              </li>
              <li>
                <Link className="nav-link" to="/library">Library</Link>
              </li>
              <li>
                <i className="fas fa-user-circle"></i>
                <Link className="nav-link" to="/library">Profile</Link>
              </li>
            </ul>
          </div>  
        </div>
      </div>
    )
  }
}

export default Header;
