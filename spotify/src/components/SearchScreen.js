import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import SearchMain from './SearcjMain';



import './styles/SearchScreen.css';


export class SearchScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchMain />
        <Footer />
      </div>
    )
  }
}

export default SearchScreen;
