import React, { Component } from 'react';
import LibraryNavigation from './LibraryNavigation';
import LibraryDetails from './LibraryDetails';
import '../styles/LibraryMain.css';

class LibraryMain extends Component {
  render() {
    return (
      <div className="librarymain-content">
        <div className="navi">
          <LibraryNavigation />
        </div>
        <div className="det">
          <LibraryDetails className="det" name="PLAYLIST"/>
        </div>
      </div>
    )
  }
}

export default LibraryMain;
