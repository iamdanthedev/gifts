import React, { Component } from 'react';
import './style.css';

class FriendBox extends Component{
  state = {
    status: this.props.status,
    friendName: this.props.friendName,
    friendEmail: this.props.friendEmail,
    addToGroup: this.props.addToGroup,
  }

  handleAddToGroup = () => {
    this.props.addToGroup(this.props.friendName, this.props.friendEmail);
  }

  render(){
    return(
      <div className="one-friend flex-property">
        <div className="friend-status color-owes">
        </div>
        <div className="friend-info flex-property div-wrap">
          <a className="friend-name">{this.props.friendName}</a>
          <p className="friend-email"> Email: {this.props.friendEmail}</p>
        </div>
        {this.props.addToGroup && <div className="flex-center flex-property">
          <a className="add-friend" onClick={this.handleAddToGroup}>+</a>
        </div>}
      </div>
    )
  }
}
export default FriendBox;
