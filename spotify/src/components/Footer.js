import React, { Component } from 'react'
import '../styles/Footer.css';
import { Button, ButtonGroup } from '../components/buttons';

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <audio controls src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg">
        </audio>
      </div>
    )
  }
}

export default Footer;
