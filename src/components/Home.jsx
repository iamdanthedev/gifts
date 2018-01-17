import React, { Component } from 'react';
import InviteFriends from './InviteFriends.jsx'
import BalanceBox from './BalanceBox.jsx'
import Groups from './Groups.jsx'
import Friends from './Friends.js'

class Home extends Component{
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
        <Groups />
        <Friends />
      </div>
    )
  }
}
export default Home;
