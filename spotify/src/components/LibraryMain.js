import React, { Component } from 'react';
import LibraryNavigation from './LibraryNavigation';
import LibraryDetails from './LibraryDetails';
import '../styles/LibraryMain.css';

export class LibraryMain extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <LibraryNavigation />
        <LibraryDetails name="PLAYLIST"/>
=======
      <div className="librarymain-content">
        <div className="navi">
          <LibraryNavigation />
        </div>
        <div className="det">
          <LibraryDetails className="det" name="PLAYLIST"/>
        </div>
>>>>>>> 9bc8d3f67ea6a3e46d88e38b8eebdd9eb1fa8da6
      </div>
    )
  }
}

export default LibraryMain;
