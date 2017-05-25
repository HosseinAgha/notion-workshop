import React, { Component } from 'react';
import Selectize from './Selectize';
import io from 'socket.io-client';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { userList: [] };
  }

  componentDidMount() {
    this.socket = io.connect('http://localhost:4000');
    this.socket.emit('apiCall', {fnName: 'getUserList'}, (res) => {
      console.log(res);
      this.setState({ userList: res });
    })  
    this.socket.on('message', (messageFromServer) => {
      console.log('server message', messageFromServer);
    })
  }

  render() {
    return (
      <div>
        <Selectize options={this.state.userList} onSelect={this.selected.bind(this)} />
      </div>
    );
  }

  selected(user) {
    this.socket.emit('message', user);
  }

}
