import React, { Component } from 'react'
import '../styles/Footer.css';
import { connect } from 'react-redux';


class Footer extends Component {

  
  render() {
    return (
      <div className="footer">
        {/* <audio controls src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"></audio> */}
        <iframe src={this.props.currentSong} width="640" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentSong: state.currentSong
})

export default connect(mapStateToProps, null)(Footer)
