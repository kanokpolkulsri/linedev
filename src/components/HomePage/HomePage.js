import React, { Component } from 'react';
import './HomePage.scss';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: "loading icon",
      data: null,
    };
  }

  render() {
    const source = new EventSource('https://chat-room-be.herokuapp.com/message');
    source.onmessage = function logEvents(event) {
      console.log(JSON.parse(event.data))
      console.log(event.data);   
    }

    return (
      <div className="app">
        <div>{this.state.data}</div>
      </div>
    );
  }
}

export default HomePage;
