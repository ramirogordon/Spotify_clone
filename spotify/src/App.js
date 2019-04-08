import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/home" component={HomeScreen} />
        <Route path="/search" component={SearchScreen} />
        <Route path="/library" component={LibraryScreen} />
      </Router>
    );
  }
}

export default App;
