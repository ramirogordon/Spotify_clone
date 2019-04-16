import React, { Component } from 'react';
import HomeMain from './HomeMain';
import Header from './Header'
import Footer from './Footer'

import '../styles/HomeScreen.css';
import queryString from 'query-string';

class HomeScreen extends Component {

  constructor() {
    super();
    this.state ={
      data: {
        user: '',
        playlists: {},
        token: ''
      }
    }
  }
  
  
  componentWillMount() {
    let parsed = queryString.parse(window.location.search);
    // console.log(localStorage);
    let accessToken = parsed.access_token;
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        token: accessToken
      }
    })
    // usuario data
    fetch('https://api.spotify.com/v1/users/ramirogordon', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(
      response => response.json()
    ).then(
      data => {
        this.setState(
          {data: {...this.state.data,
            user: data.id
          }}
        );
      }
    );

    // playlists
    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(
      response => response.json()
    ).then(
      playlists => {
        this.setState(
          {data: {...this.state.data,
            playlists: playlists
          }}
        );
      }
    );
  }


  render() {
    // console.log(localStorage);
    console.log(this.state.data);
    return (
      <div>
        <Header data={this.state.data}/>
        <HomeMain 
          data={this.state.data.playlists} 
          accessToken={this.state.data.token}
        />
        <Footer />
      </div>
    )
  }
}

export default HomeScreen;
