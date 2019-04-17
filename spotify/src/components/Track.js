import React from 'react'
import combinedActions from '../redux/actions'
import { connect } from 'react-redux'

 const Track = (props) => {
   const { changeCurrentSong } = props;
    let listSongs;
    const contentSongs = props.contentSongs;
    if (contentSongs) {
      listSongs = contentSongs.map((item, i) => {
        return(
          <div className="band-name" key={i}>
            <figure onClick={() => changeCurrentSong(item.external_urls.spotify)}>
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

const mapDispatchToProps = {
  changeCurrentSong: combinedActions.currentSong
}

export default connect(null, mapDispatchToProps)(Track);
