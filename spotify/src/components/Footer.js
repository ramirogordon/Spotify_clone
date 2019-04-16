import React, { Component } from 'react'
import '../styles/Footer.css';

class Footer extends Component {
  state = {
    song: 'https://open.spotify.com/embed/track/1hfJmTJIbGBaZhu5yJOA0b'
  }
  handleChangeSong= () =>{
    this.setState({song: 'https://open.spotify.com/embed/track/3D9nKkotpBHM2smrAR0ij8'})
  }
  
  render() {
    return (
      <div className="footer">
        <button
          onClick={this.handleChangeSong}
        >CLICK ME</button>
        {/* <audio controls src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"></audio> */}
        <iframe src={this.state.song} width="640" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    )
  }
}

export default Footer;
