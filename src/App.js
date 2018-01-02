import React, { Component } from 'react';
import {Header} from './header'
import {TimePanel} from './time-panel'
import {Diagram} from './diagram'
import {Tooltip} from './components/tooltip'
import {Modal} from './components/modal'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TimePanel/>
        <Diagram/>
        <Tooltip/>
        <Modal/>
      </div>
    );
  }
}

export default App;
