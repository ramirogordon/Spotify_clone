import React, { Component } from 'react';
import LibraryNavigation from './LibraryNavigation';
import LibraryDetails from './LibraryDetails';
import '../styles/LibraryMain.css';

export class LibraryMain extends Component {
  render() {
    return (
      <div className="librarymain-content">
        <div className="navi">
          <LibraryNavigation />
        </div>
        <div className="det">
          <LibraryDetails className="det"/>
        </div>
      </div>
    )
  }
}

export default LibraryMain;
