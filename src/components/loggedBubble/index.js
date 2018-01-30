import React, { Component } from 'react';
import P from 'prop-types';
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
          {this.props.username}
        </div>
      </div>
    );
  }
}

LoggedBubble.propTypes = {
  username: P.string
};

LoggedBubble.defaultProps = {
  username: ''
};

export default LoggedBubble;
