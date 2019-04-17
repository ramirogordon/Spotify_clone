import React, { Component } from 'react'
import Header from './Header'
import SearchMain from './SearchMain';



import '../styles/SearchScreen.css';


class SearchScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchMain />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default SearchScreen;
