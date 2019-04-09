import React, { Component } from 'react'
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

import '../styles/HomeMain.css';

class HomeMain extends Component {
  render() {
    return (
      <div className="homemain">
        <div className="homemain-content">
          <div className="newReleases">
            <h2>NEW RELEASES</h2>
            <div className="band-items">
              <div className="band-name">
                <img src={band1} alt="band1"/>
                <h3>The peppers</h3>
              </div>
              <div className="band-name">
                <img src={band2} alt="band2"/>
                <h3>Eminem</h3>
              </div>
              <div className="band-name">
                <img src={band3} alt="band3"/>
                <h3>Fleetwood Mac</h3>
              </div>
              <div className="band-name">
                <img src={band4} alt="band4"/>
                <h3>R.E.M.</h3>
              </div>
              <div className="band-name">
                <img src={band5} alt="band5"/>
                <h3>Twenty One Pilots</h3>
              </div>
              <div className="band-name">
                <img src={band6} alt="band6"/>
                <h3>Maroon 5</h3>
              </div>
              <div className="band-name">
                <img src={band7} alt="band7"/>
                <h3>Calvin Harris</h3>
              </div>
              <div className="band-name">
                <img src={band8} alt="band8"/>
                <h3>DJ Snake</h3>
              </div>
              <div className="band-name">
                <img src={band9} alt="band9"/>
                <h3>Bon Jovi</h3>
              </div>
              <div className="band-name">
                <img src={band10} alt="band10"/>
                <h3>Florence + the Machine</h3>
              </div>
            </div>
          </div>
        <div className="charts-content">
          <h2>CHARTS</h2>
          <div className="band-items">
              <div className="band-name">
                <img src={band1} alt="band1"/>
                <h3>The peppers</h3>
              </div>
              <div className="band-name">
                <img src={band2} alt="band2"/>
                <h3>Eminem</h3>
              </div>
              <div className="band-name">
                <img src={band3} alt="band3"/>
                <h3>Fleetwood Mac</h3>
              </div>
              <div className="band-name">
                <img src={band4} alt="band4"/>
                <h3>R.E.M.</h3>
              </div>
              <div className="band-name">
                <img src={band5} alt="band5"/>
                <h3>Twenty One Pilots</h3>
              </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default HomeMain;
