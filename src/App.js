import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Containers/grid/grid'
import Wrapper from './Components/wrapper/wrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Wrapper/>
      </div>
    );
  }
}

export default App;
