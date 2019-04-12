import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import LibraryMain from './LibraryMain';
// import queryString from 'query-string';

import '../styles/LibraryScreen.css';

class LibraryScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        userName: 'PLAYLIST',
        userImageUrl: ''
      }
    }
  }

  componentDidMount() {
    // let parsed = queryString.parse(window.location.search);
    // console.log(parsed);

    // Hardcoding accessToken (Then will be recived by Redux store)
    let accessToken = 'BQA7ZXOYXWz01K1DATMQJ-MwniOdPw9s2YB_Ccc_hYynehTYFCspyxsTgZBiTCVBw66ot-LlTy1bBCCsSXZoQ3BCWAzM5KOFyvM4Jmjjj6Wjy2L9u6urePgqKzBj0SmcYkaizCZq4q4csBcgWvWQfT-p8vpSgOru6WVM7AA';
    // usuario data
    fetch('https://api.spotify.com/v1/users/ramirogordon', {
      headers: {'Authorization': 'Bearer ' + accessToken}})
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({...this.state, data: {
          userName: data.display_name,
          userImageUrl: data.images[0].url
        }})
      });

    fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => console.log(data));

  }

  render() {
    return (
      <div>
        <Header userName={this.state.data.userName}/>
        <LibraryMain dataUser={this.state.data}/>
        <Footer />
      </div>
    )
  }
}

export default LibraryScreen;
