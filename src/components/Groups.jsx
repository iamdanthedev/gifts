import React, { Component } from 'react';
import OneGroup from './OneGroup.jsx'

class Groups extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.searchInput,
    };
  }

  render(){
    return(
      <div className="groups white-box flex-property div-wrap">
        <OneGroup status="own" amountValue="12$"/>
        <OneGroup status="clear" amountValue="16$"/>
        <OneGroup status="owned" amountValue="127$"/>
        <OneGroup status="own" amountValue="4$"/>
        <OneGroup status="clear" amountValue="55$"/>
        <OneGroup status="owned" amountValue="83$"/>
      </div>
    )
  }
}
export default Groups;
