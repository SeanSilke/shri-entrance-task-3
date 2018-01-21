import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import {Diagram} from './diagram'
import {Editing} from './meeting-editing';
import './app.css'

class App extends Component {
  render() {
    return (
        <Router>
          <div
          className="App">
            <Route path="/diagram" component={Diagram}/>
            <Route path="/editing" component={Editing}/>
          </div>
        </Router>
    );
  }
}

export default App;
