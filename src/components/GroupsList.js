import React, { Component } from 'react';
import OneGroup from './OneGroup.jsx'

class GroupsList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.searchInput,
    };
  }

  render(){
    return(
      <div className="max-w groups white-box flex-property div-wrap">
        <OneGroup status="owe" amountValue="12$"/>
        <OneGroup status="clear" amountValue="16$"/>
        <OneGroup status="owes" amountValue="127$"/>
        <OneGroup status="owe" amountValue="4$"/>
        <OneGroup status="clear" amountValue="55$"/>
        <OneGroup status="owes" amountValue="83$"/>
        <OneGroup status="owes" amountValue="127$"/>
        <OneGroup status="owe" amountValue="4$"/>
        <OneGroup status="clear" amountValue="55$"/>
        <OneGroup status="owes" amountValue="83$"/>
        <OneGroup status="owes" amountValue="127$"/>
        <OneGroup status="owe" amountValue="4$"/>
        <OneGroup status="clear" amountValue="55$"/>
        <OneGroup status="owes" amountValue="83$"/>
      </div>
    )
  }
}
export default GroupsList;
