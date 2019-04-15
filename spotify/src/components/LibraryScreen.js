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
        userName: 'User Name',
        userImageUrl: ''
      },
      contentDetails: {
        playlist: {
        },
        discover: {
        },
        songs: {
        },
        albums: {
        },
        artists: {
        },
        releases: {
        }
      }
    }
  }

  componentDidMount() {
    // let parsed = queryString.parse(window.location.search);
    // console.log(parsed);

    // Hardcoding accessToken (Then will be recived by Redux store)
    let accessToken = 'BQCwkpaCWyM8ZbrrhLFIZYdZ90WioIFz9zNs-OYnq93F-p4tpKBSGnlvX6mYYFbhNsoUaqN8zG25lPCNfprouEtcqjIfymOAWWCoSqyXLw82Q-FKEyAbnwMQCFYq-412GkD4-hNTIVtdLEmyQjNqhLAuvvIUIivY';

    // Fetching User Data
    fetch('https://api.spotify.com/v1/users/mlovi34', {
      headers: {'Authorization': 'Bearer ' + accessToken}})
      .then(response => response.json())
      .then(data => {
        this.setState({...this.state, data: {
          userName: data.display_name,
          userImageUrl: data.images[0] ? data.images[0].url : null
        }})
      });

    // Fetching Playlist
    fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.setState({
      ...this.state,
      contentDetails: {...this.state.contentDetails, playlist: data}
    }));

    // Fetching Discover
    fetch('https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.setState({
      ...this.state,
      contentDetails: {...this.state.contentDetails, discover: data}
    }));

    // Fetching Songs
    fetch('https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B&market=ES', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.setState({
      ...this.state,
      contentDetails: {...this.state.contentDetails, songs: data}
    }));

    // Fetching Albums
    fetch('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => {
      console.log('Estos son los albumes',data);
      this.setState({
      ...this.state,
      contentDetails: {...this.state.contentDetails, albums: data}
    })});

    // Fetching Artists
    fetch('https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.setState({
      ...this.state,
      contentDetails: {...this.state.contentDetails, artists: data}
    }));

    // Fetching Releases
    fetch('https://api.spotify.com/v1/browse/new-releases', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.setState({
      ...this.state,
      contentDetails: {...this.state.contentDetails, releases: data}
    }));

    


  }

  render() {
    console.log(this.state.contentDetails);
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
