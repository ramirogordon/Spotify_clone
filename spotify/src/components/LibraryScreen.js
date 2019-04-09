import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import LibraryMain from './LibraryMain';


import '../styles/LibraryScreen.css';


class LibraryScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <LibraryMain />
        <Footer />
      </div>
    )
  }
}

export default LibraryScreen;
