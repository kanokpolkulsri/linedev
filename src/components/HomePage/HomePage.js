import React, { Component } from 'react';
import './HomePage.scss';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: 'loading icon',
      data: null,
      name: "",
      server: "",
      sumbit: false,
      message: null,
    };
  }

  updateName = (e) => {
    this.setState({name: e.target.value});
  }

  updateServer = (e) => {
    this.setState({server: e.target.value});
  }

  updateMessage = (e) => {
    this.setState({message: e.target.value});
  }

  clickConnect = (e) => {
    this.setState({sumbit: true});
  }

  clickSend = (e) => {
    // todo:
  }

  render() {
    const source = new EventSource('https://chat-room-be.herokuapp.com/message');
    source.onmessage = function logEvents(event) {
      console.log(JSON.parse(event.data))
      console.log(event.data);
    }

    return (
      <div className='app' style={{textAlign: 'left', marginTop: '16px'}}>
        User: <input type='text' id='name' name='name' onChange={this.updateName} className='userInput'></input>
        Chat server: <input type='text' id='server' name='server' onChange={this.updateServer} className='serverInput'></input>
        <button onClick={this.clickConnect}>connect</button>
        
        <div className={`plam ${this.state.sumbit ? 'show' : 'hide'}`}>data: {this.state.data}</div>
        <div className='messageInputContainer'>
          Message: <input type='text' id='name' name='name' onChange={this.updateMessage} className='messageInput'></input>
          <button disabled={!this.state.message} onClick={this.clickSend}>send</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
