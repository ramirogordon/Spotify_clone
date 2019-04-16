import React, { Component } from 'react'
import Track from './Track';
import '../styles/Playlist.css';

class Playlist extends Component {
  constructor() {
  super();
  this.state = {
    songs: null
  }
  }

  // componentDidMount() {
  //   fetch(this.props.playlist.tracks.href, {
  //     headers: {'Authorization': 'Bearer ' + this.props.accessToken}
  //   }).then(response => response.json())
  //     .then(songs => {this.setState({songs})}
  //   );
  // }
  
  // getPlaylistDetails = () => {
  //   const modal = document.getElementById('modal');
  //   modal.style.display = "block";
  //   window.onclick = (event) => {
  //     if (event.target === modal) {
  //       modal.style.display = "none";
  //     }
  //   }
  // }

  render() {
    let list
    const playlist = this.props.playlist;
    if (playlist) {
      list = playlist.map((item, i) => {
        console.log('playlist = ', item);
        // let listSongs;
        // const songs = this.state.songs;
        // console.log(songs);
        // if (songs) {
        //   listSongs = songs.items.map((song, i) => {
        //     return(
        //       <Track 
        //         key={i} 
        //         song={song.track.name}
        //       />
        //     )
        //   })
        // }
        return(
          <div className="band-name" key={i}>
            <figure>
            <img src={item.images[0].url} alt="band1" />
            </figure>
            <h3>{item.name}</h3>
            {/* <div id="modal">
              <div className="modal-content">
                <ul>
                  {listSongs}
                </ul>
              </div>
            </div> */}
          </div>
        )
      });
    }
    return (
      <>
        <div className="band-items">
          {list}
        </div>
      </>
    )
  }
  
}

export default Playlist
