import React from 'react';
import '../styles/Playlist.css';
import combinedActions from '../redux/actions';
import { connect} from 'react-redux';

const Playlist = (props) =>{
    const { changeCurrentSong } = props;
    let list;
    const contentPlaylist = props.contentPlaylist;
    if (contentPlaylist) {
      list = contentPlaylist.map((item, i) => {
        return(
          <div className="band-name" key={i}>
            <figure onClick={() => changeCurrentSong(item.external_urls.spotify)}>
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

const mapDispatchToProps = {
  changeCurrentSong: combinedActions.currentSong
}

export default connect(null, mapDispatchToProps)(Playlist)
