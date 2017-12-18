import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import './App.css';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          {/* <h1 className="App-title">GoSolar</h1> */}
      </div>
    );
  }
}

export default App;
