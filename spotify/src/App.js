import React, { Component } from 'react';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import LibraryScreen from './components/LibraryScreen';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
          </ul>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/library" component={LibraryScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
