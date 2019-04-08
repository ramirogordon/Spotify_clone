import React, { Component } from 'react';
import LibraryNavigation from './LibraryNavigation';
import LibraryDetails from './LibraryDetails';
import '../styles/LibraryMain.css';

export class LibraryMain extends Component {
  render() {
    return (
      <div>
        <LibraryNavigation />
        <LibraryDetails />
      </div>
    )
  }
}

export default LibraryMain;
