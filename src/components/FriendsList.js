import React, { Component } from 'react';
import OneFriend from './OneFriend.jsx'

class FriendsList extends Component{
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

  addFriendToGroup = (id) => (a, b) => {
    console.log('Button was clicked!');
    console.log(a);
    console.log(b);

    const newSelected =  this.state.temp.filter(item => item.id === id);

    this.setState({
      selectedId: this.state.selectedId.concat(newSelected),
      temp: this.state.temp.filter(item => item.id !== id)
    });
  }

  render(){
    return(

      <div className="max-w friends white-box flex-property div-wrap">
      {
        this.state.temp.map((friend) =>
          <OneFriend status="own" key={friend.id} friendEmail={friend.friendEmail} friendName={friend.friendName} addToGroup={this.addFriendToGroup(friend.id)}/>
        )
      }
      </div>
    )
  }
}
export default FriendsList;
