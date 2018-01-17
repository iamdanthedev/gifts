import React, { Component } from 'react';

class OneFriend extends Component{
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      friendEmail: props.friendEmail,
    };
  }
  render(){
    return(
      <div className="one-group white-box flex-property flex-center">
        <div className="group-status group-color-clear">
          <p className="group-members friend-amound div-wrap flex-property flex-center">
            <span className="friend-status">owes you</span>13</p>
        </div>
        <div className="group-info flex-property div-wrap">
          <a className="group-name">Senka Ib.</a>
          <p className="group-my-status"> Email: {this.props.friendEmail}</p>
        </div>
      </div>
    )
  }
}
export default OneFriend;
