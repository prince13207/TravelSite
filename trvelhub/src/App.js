import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rohit Travels</h1>
        
        <p className="App-intro">
          Book Cabs at your ease.
        </p>
      </div>
    ); 
  }
}

export default App;
