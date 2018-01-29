import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Diagram } from "./diagram";
import { Editing } from "./meeting-editing";
import "./app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Diagram} />
            <Route path="/new" component={Editing} />
            <Route path="/editing" component={Editing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
