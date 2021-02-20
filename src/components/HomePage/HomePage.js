import React, { Component } from 'react';
import './HomePage.scss';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: "loading icon",
    };
  }

  render() {
    return (
      <div className="app">
        hey
      </div>
    );
  }
}

export default HomePage;
