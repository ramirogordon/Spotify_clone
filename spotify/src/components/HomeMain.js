import React, { Component } from 'react'
import band1 from '../img/band1.png';


import '../styles/HomeMain.css';
import Playlist from './Playlist';

class HomeMain extends Component {
  render() {
    let list;
    const playlists = this.props.data.items;
    console.log(playlists);
    if (playlists) {
      list = playlists.map((item, i) => {
        const imagen = item.images[0].url
        return(
          <div className="band-name" key={i}>
            <Playlist 
              band={imagen}
              item={item}
              accessToken={this.props.accessToken}
            />
          </div>
        )
      });
    }
    return (
      <div className="homemain">
        <div className="homemain-content">
          <div className="newReleases">
            <h2>NEW RELEASES</h2>
            <div className="band-items">
              {list}
            </div>
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
