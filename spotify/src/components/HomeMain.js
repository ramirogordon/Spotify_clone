import React, { Component } from 'react';

import '../styles/HomeMain.css';
import Playlist from './Playlist';

class HomeMain extends Component {
  render() {
    let list;
    const playlists = this.props.data.items;
    console.log(playlists);
    
    return (
      <div className="homemain">
        <div className="homemain-content">
          <div className="newReleases">
            <h2>NEW RELEASES</h2>
            <Playlist playlist={playlists} />
          </div>
          <div className="charts-content">
            <h2>CHARTS</h2>
            <div className="band-items">
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default HomeMain;
