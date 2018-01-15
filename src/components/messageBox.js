import React, { Component } from 'react';

class MessageBox extends Component{
  render(){
    return(
      <div className={"message-box " + (this.props.messageType)}>
         <p>Some global {this.props.messageType} message goes here.</p>
         <button className="close-message"><i className="fa fa-close"></i></button>
      </div>
    )
  }
}

export default MessageBox;
