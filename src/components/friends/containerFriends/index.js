import React, { Component } from 'react';
import FriendBox from '../friendsBox'
import InviteFriends from '../../layout/inviteFriends'

class Friends extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.searchInput,
      temp:[
          {
            'id': '0',
            'status': 'own',
            'friendEmail': 'ex@gmail.com',
            'friendName': 'Senka Ib.'
          },
          {
            'id': '1',
            'status': 'owned',
            'friendEmail': 'ex@gmail.com',
            'friendName': 'Harun Sm.'
          },
          {
            'id': '2',
            'status': 'clear',
            'friendEmail': 'ex@gmail.com',
            'friendName': 'Tarik Dm.'
          },
          {
            'id': '3',
            'status': 'own',
            'friendEmail': 'ex@gmail.com',
            'friendName': 'Nejra Pa.'
          },
          {
            'id': '4',
            'status': 'owned',
            'friendEmail': 'ex@gmail.com',
            'friendName': 'Haris Mu.'
          },
          {
            'id': '5',
            'status': 'clear',
            'friendEmail': 'ex@gmail.com',
            'friendName': 'Mirza Sm.'
          },
          {
            'id': '6',
            'status': 'own',
            'friendEmail': 'ex@gmail.com',
            'friendName': 'Irma Ja.'
          }
        ]
    };
  }

  render(){
    return(
      <div class="list-page">
        <div className="max-w friends white-box flex-property div-wrap">
          {
            this.state.temp.map((friend) =>
              <FriendBox status="own" key={friend.id} friendEmail={friend.friendEmail} friendName={friend.friendName} />
            )
          }
        </div>
      </div>
    )
  }
}
export default Friends;
