import React, { Component } from 'react';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import LibraryScreen from './components/LibraryScreen';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/Store';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/search" component={SearchScreen} />
            <Route path="/library" component={LibraryScreen} />

            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
