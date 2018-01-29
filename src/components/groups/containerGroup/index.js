import React, { Component } from 'react';
import GroupBox from '../groupBox'

class containerGroup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.searchInput,
    };
  }

  render(){
    return(
      <div className="list-page">
        <div className="max-w groups white-box flex-property div-wrap">
          <GroupBox status="owe" amountValue="12$"/>
          <GroupBox status="clear" amountValue="16$"/>
          <GroupBox status="owes" amountValue="127$"/>
          <GroupBox status="owe" amountValue="4$"/>
          <GroupBox status="clear" amountValue="55$"/>
          <GroupBox status="owes" amountValue="83$"/>
        </div>
      </div>
    )
  }
}
export default containerGroup;
