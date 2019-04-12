import React from 'react'
import Tracks from './Tracks';

const Playlist = (props) => {

  console.log('entro a playlist');
  const getPlaylistDetails = () => {
    const modal = document.getElementById('modal');
    modal.style.display = "block";
    window.onclick = (event) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
  }

  return (
    <>
        <figure>
            <img src={props.band} alt="band1" onClick={getPlaylistDetails}/>
        </figure>
        <h3>{props.item.name}</h3>
        <div id="modal">
            <div className="modal-content">
                <Tracks 
                    item={props.item} 
                    accessToken={props.accessToken}
                />
            </div>
        </div>
    </>
  )
}

export default Playlist
