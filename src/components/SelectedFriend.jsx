import React, { Component } from 'react';

class SelectedFriend extends Component{
  constructor(props) {
    super(props);
    this.state = {
      friendName: props.friendName,
      friendEmail: props.friendEmail,
      removeFromGroup: props.removeFromGroup
    };
  }

  handleRemoveToGroup = () => {
      this.props.removeFromGroup(this.props.friendName, this.props.friendEmail);
  }

  render(){
    return(
      <div className="selected-friend one-friend flex-property">
        <div className="friend-info flex-property div-wrap">
          <a className="friend-name">{this.props.friendName}</a>
          <p className="friend-email"> Email: {this.props.friendEmail}</p>
        </div>
        <div className="flex-center flex-property">
          <a className="remove-friend" onClick={this.handleRemoveToGroup}>-</a>
        </div>
      </div>
    )
  }
}
export default SelectedFriend;
