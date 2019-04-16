import React from 'react'

 const Track = (props) => {
    let listSongs;
    const contenctSongs = props.contentSongs;
    if (contenctSongs) {
      listSongs = contenctSongs.map((item, i) => {
        return(
          <div className="band-name" key={i}>
            <figure>
            <img src={item.album.images[0].url} alt="band1" />
            </figure>
            <h3>{item.name}</h3>
          </div>
        )
      });
    }
    return (
      <>
        <div className="band-items">
          {listSongs}
        </div>
      </>
    )
}


export default Track;
