import React from 'react'
import '../styles/Playlist.css';

const Playlist = (props) =>{
    let list;
    const contentPlaylist = props.contentPlaylist;
    if (contentPlaylist) {
      list = contentPlaylist.map((item, i) => {
        return(
          <div className="band-name" key={i}>
            <figure>
              <img src={item.images[0].url} alt={'band'+i} />
            </figure>
            <h3>{item.name}</h3>
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

export default Playlist
