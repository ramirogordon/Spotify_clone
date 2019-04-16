import React, { Component } from 'react';
import '../styles/LibraryDetails.css';
import Playlist from './Playlist';
import Track from './Track';

class LibraryDetails extends Component {
  render() {
    console.log(this.props.contentCategory);
    return (
      <div className="libraryDetails">
        <h2>{ this.props.title }</h2>
        <div className="items">
          {this.props.title === 'songs' || this.props.title === 'discover'? 
            <Track
              contentSongs={this.props.contentCategory}
            />
            :
            <Playlist
              contentPlaylist={this.props.contentCategory}
            />
          }
        </div>
      </div>
    )
  }
}

export default LibraryDetails;
