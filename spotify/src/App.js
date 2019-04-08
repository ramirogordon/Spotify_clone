import React, { Component } from 'react';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import LibraryScreen from './components/LibraryScreen';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/library" component={LibraryScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
