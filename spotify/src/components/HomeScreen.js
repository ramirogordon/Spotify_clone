import React, { Component } from 'react';
import HomeMain from './HomeMain';
import Header from './Header'
import Footer from './Footer'

import './styles/HomeScreen.css';

export class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeMain />
        <Footer />
      </div>
    )
  }
}

export default HomeScreen;
