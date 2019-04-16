import React, { Component } from 'react'
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* <audio controls src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"></audio> */}
        <iframe src="https://open.spotify.com/embed/album/382ObEPsp2rxGrnsizN5TX" width="640" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    )
  }
}

export default Footer;
