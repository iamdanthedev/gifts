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
      <div className="one-friend flex-property">
        <div className="friend-status color-owes">
        </div>
        <div className="friend-info flex-property div-wrap">
          <a className="friend-name">Senka Ib.</a>
          <p className="friend-email"> Email: {this.props.friendEmail}</p>
        </div>
        <div className="flex-center flex-property">
          <a className="add-friend" href="/random">+</a>
        </div>
      </div>
    )
  }
}
export default OneFriend;
