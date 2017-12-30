import React, { Component } from 'react';
import {Header} from './header'
import {TimePanel} from './time-panel'
import {Diagram} from './diagram'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TimePanel/>
        <Diagram/>
      </div>
    );
  }
}

export default App;
