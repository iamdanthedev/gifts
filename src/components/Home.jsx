import React, { Component } from 'react';
import InviteFriends from './InviteFriends.jsx'
import BalanceBox from './BalanceBox.jsx'
import Groups from './Groups.jsx'

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.searchInput,
    };
  }

  render(){
    return(
      <div className="flex-property flex-center div-wrap">
        <InviteFriends />
        <BalanceBox />
        <Groups />
      </div>
    )
  }
}
export default Home;
