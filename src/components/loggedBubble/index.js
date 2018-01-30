import React, { Component } from 'react';
import './style.css';

class LoggedBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handlePass = this.handlePass.bind(this);
  }

  render() {
    return (
      <div className="login-bubble">
        <div className="username title-xs flex-property column-orient">
          <i className="fa fa-user-circle-o" aria-hidden="true" />
          Username
        </div>
      </div>
    );
  }
}
export default LoggedBubble;
