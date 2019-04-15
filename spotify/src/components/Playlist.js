import React, { Component } from 'react'
import Tracks from './Tracks';

class Playlist extends Component {
  constructor() {
    super();
    this.state = {
      songs: null
    }
  }

  componentDidMount() {
    fetch(this.props.item.tracks.href, {
      headers: {'Authorization': 'Bearer ' + this.props.accessToken}
    }).then(
      response => response.json()
    ).then(
      songs => {
        this.setState({
          songs: songs
        });
      }
    );
  }
  
  getPlaylistDetails = () => {
    const modal = document.getElementById('modal');
    modal.style.display = "block";
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }

  render() {
    let list;
    const songs = this.state.songs;
    console.log(songs);
    if (songs) {
      list = songs.items.map((song, i) => {
        return(
          <Tracks 
            key={i} 
            song={song.track.name}
          />
        )
      })
    }
    return (
      <>
        <figure>
          <img src={this.props.band} alt="band1" onClick={this.getPlaylistDetails}/>
        </figure>
        <h3>{this.props.item.name}</h3>
        <div id="modal">
          <div className="modal-content">
            <ul>
              {list}
            </ul>
          </div>
        </div>
      </>
    )
  }
  
}

export default Playlist
