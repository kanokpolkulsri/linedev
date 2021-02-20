import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: "loading icon",
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
