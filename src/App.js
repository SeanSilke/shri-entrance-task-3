import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Diagram } from "./diagram";
import { EditingWithData } from "./meeting-editing";
import "./app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Diagram} />
            <Route path="/editing" component={EditingWithData} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
