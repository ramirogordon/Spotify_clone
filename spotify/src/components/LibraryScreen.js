import React, { Component } from 'react'
import Header from './Header'
import LibraryMain from './LibraryMain';
// import queryString from 'query-string';
import '../styles/LibraryScreen.css';

import { connect } from 'react-redux';
import combinedActions from '../redux/actions';

class LibraryScreen extends Component {
  componentDidMount() {
    // let parsed = queryString.parse(window.location.search);
    // console.log(parsed);

    // Hardcoding accessToken (Then will be recived by Redux store)
    let accessToken = localStorage.accessToken;
    console.log('Verdadero accessToken', accessToken );


    // Fetching User Data
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}})
      .then(response => response.json())
      .then(data => this.props.UserData(data));

    // Fetching Playlist
    fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.props.Playlist(data.items));

    // Fetching Discover
    fetch('https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.props.Discover(data.tracks));

    // Fetching Songs
    fetch('https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B&market=ES', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.props.Songs(data.tracks));

    // Fetching Albums
    fetch('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.props.Albums(data.albums));

    // Fetching Artists
    fetch('https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.props.Artists(data.artists));

    // Fetching Releases
    fetch('https://api.spotify.com/v1/browse/new-releases', {
    headers: {'Authorization': 'Bearer ' + accessToken}})
    .then(response => response.json())
    .then(data => this.props.Releases(data.albums.items));
  }

  render() {
    console.log(this.props.state.contentDetails);
    return (
      <div>
        <Header userName={this.props.state.data.userName}/>
        <LibraryMain 
          dataUser={this.props.state.data}
          contentDetails={this.props.state.contentDetails}
          />
        {/* <Footer /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  UserData: combinedActions.userData,
  Playlist: combinedActions.playlist,
  Discover: combinedActions.discover,
  Songs: combinedActions.songs,
  Albums: combinedActions.albums,
  Artists: combinedActions.artists,
  Releases: combinedActions.releases,
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryScreen);
