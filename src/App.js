import React, { Component } from 'react';
import {MainScreen} from './screens/main'
import {Editing} from './screens/editing';
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreen/>
      </div>
    );
  }
}

export default App;
