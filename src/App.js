/*
Neighborhood Map Project - second comment
*/


import React, { Component } from 'react';
import logo from './logo.svg';
import MapComponent from './MapComponent'
import SideBarComponent from './SideBarComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<SideBarComponent/>
		<MapComponent/>
      </div>
    );
  }
}

export default App;
