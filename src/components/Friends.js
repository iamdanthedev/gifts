import React, { Component } from 'react';
import OneFriend from './OneFriend.jsx'

class Friends extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.searchInput,
    };
  }

  render(){
    return(
      <div className="groups white-box flex-property div-wrap">
        <OneFriend status="own" friendEmail="ex@gmail.com"/>
        <OneFriend status="clear" friendEmail="ex@gmail.com"/>
        <OneFriend status="owned" friendEmail="ex@gmail.com"/>
        <OneFriend status="own" friendEmail="ex@gmail.com"/>
        <OneFriend status="clear" friendEmail="ex@gmail.com"/>
        <OneFriend status="owned" friendEmail="ex@gmail.com"/>
      </div>
    )
  }
}
export default Friends;
