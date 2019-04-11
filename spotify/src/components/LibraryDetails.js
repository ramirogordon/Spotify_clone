import React, { Component } from 'react';
import '../styles/LibraryDetails.css';
import band1 from '../img/band1.png';
import band2 from '../img/band2.png';
import band3 from '../img/band3.png';
import band4 from '../img/band4.png';
import band5 from '../img/band5.png';
import band6 from '../img/band6.png';
import band7 from '../img/band7.png';
import band8 from '../img/band8.png';
import band9 from '../img/band9.png';
import band10 from '../img/band10.png';

class LibraryDetails extends Component {
  render() {
    const name = this.props.name
    return (
      <div className="libraryDetails">
        <h2>{ name }</h2>
        <div className="items">
          <div className="item">
            <img src={band6} alt="band6" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band4} alt="band4" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band7} alt="band7" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band10} alt="band10" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band1} alt="band1" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band3} alt="band3" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band9} alt="band9" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band2} alt="band2" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band5} alt="band5" />
            <h3>Marron 5</h3>
          </div>
          <div className="item">
            <img src={band8} alt="band8" />
            <h3>Maroon 5</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryDetails;
