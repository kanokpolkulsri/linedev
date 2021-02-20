import React, { Component } from 'react';
import axios from 'axios';
import './HomePage.scss';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: 'loading icon',
      realTimeMessage: [],
      name: '',
      server: 'https://chat-room-be.herokuapp.com',
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
    if (this.state.server) {
      this.connectSource();
    }
  }

  clickSend = (e) => {
    this.postMessage();
  }

  postMessage = () => {
    let body = {
      user: this.state.name,
      message: this.state.message
    };
    axios
      .post(this.state.server + '/message', body)
      .then((res) => {
        console.log(res);
      })
  }

  connectSource = () => {
    const source = new EventSource(this.state.server + '/message'); // todo: create proper API cross-origin
    source.onmessage = function logEvents(event) {
      // todo: set data to state.realTimeMessage
      console.log(JSON.parse(event.data))
      console.log(event.data);
    }
  }

  renderRealTimeData = () => {
    // todo: render state.realTimeMessage from []
    return <div className='plam'>data: {this.state.realTimeMessage[0]}</div>
  }

  render() {
    let obj = JSON.parse({"user":"Admin","message":"test","time":"17 Feb 23:26:14"});
      console.log(obj);
    return (
      <div className='app' style={{textAlign: 'left', marginTop: '16px'}}>
        <div className='initInputContainer'>
          User: <input type='text' id='name' name='name' value='plam' onChange={this.updateName} className='userInput'></input>
          Chat server: <input type='text' id='server' name='server' value={this.state.server} onChange={this.updateServer} className='serverInput'></input>
          <button onClick={this.clickConnect}>connect</button>
        </div>

        <div className={this.state.sumbit ? 'show' : 'hide'}>
          {this.renderRealTimeData()}
          <div className='messageInputContainer'>
            Message: <input type='text' id='name' name='name' onChange={this.updateMessage} className='messageInput'></input>
            <button disabled={!this.state.message} onClick={this.clickSend}>send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
