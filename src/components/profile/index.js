import React, { Component } from 'react';
import InviteFriends from '../layout/inviteFriends'

import BalanceBox from '../balance'
import Friends from '../friends/containerFriends'
import GroupBox from '../groups/groupBox'

import './style.css';

class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.searchInput,
    };
  }

  render(){
    return(
      <div className="max-w flex-property flex-center div-wrap">
        <InviteFriends />
        <BalanceBox />
        <div className="max-w groups white-box flex-property div-wrap">
          <GroupBox status="owe" amountValue="12$"/>
        </div>
        <Friends />
      </div>
    )
  }
}
export default Profile;
