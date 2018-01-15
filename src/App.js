import React, { Component } from 'react';
import {Diagram} from './diagram'
import {Editing} from './meeting-editing';
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Diagram/> */}
        <Editing/>
      </div>
    );
  }
}

export default App;
