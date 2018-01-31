import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

import InviteFriends from '../../layout/inviteFriends';
import CustomInput from '../../customInput';
import FriendBox from '../../friends/friendsBox';
import SelectedFriend from '../../friends/selectedFriendBox';

import './style.css';

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isAdded: false,
      selectedId: [],
      temp: [
        {
          id: '0',
          status: 'own',
          friendEmail: 'ex@gmail.com',
          friendName: 'Senka Ib.',
        },
        {
          id: '1',
          status: 'owned',
          friendEmail: 'ex@gmail.com',
          friendName: 'Harun Sm.',
        },
        {
          id: '2',
          status: 'clear',
          friendEmail: 'ex@gmail.com',
          friendName: 'Tarik Dm.',
        },
        {
          id: '3',
          status: 'own',
          friendEmail: 'ex@gmail.com',
          friendName: 'Nejra Pa.',
        },
        {
          id: '4',
          status: 'owned',
          friendEmail: 'ex@gmail.com',
          friendName: 'Haris Mu.',
        },
        {
          id: '5',
          status: 'clear',
          friendEmail: 'ex@gmail.com',
          friendName: 'Mirza Sm.',
        },
        {
          id: '6',
          status: 'own',
          friendEmail: 'ex@gmail.com',
          friendName: 'Irma Ja.',
        },
      ],
    };
  }

  handleDateOnChange = date => this.setState({ date });
  addFriendToGroup = id => (a, b) => {
    const newSelected = this.state.temp.filter(item => item.id === id);
    this.setState({
      selectedId: this.state.selectedId.concat(newSelected),
      temp: this.state.temp.filter(item => item.id !== id),
    });
  };
  removeFriendFromGroup = id => (a, b) => {
    const removeFriend = this.state.selectedId.filter(item => item.id === id);
    this.setState({
      selectedId: this.state.selectedId.filter(item => item.id !== id),
      temp: this.state.temp.concat(removeFriend),
    });
  };
  handleNameChangeValue() {}
  render() {
    return (
      <div className="max-w groups flex-property div-wrap">
        <InviteFriends />

        <div className="create-group white-box flex-property div-wrap">
          <h6>Create new event and invite your friends to join!</h6>

          <form className="createGroupForm">
            <div className="group-basic-info">
              <div className="form-input-elements">
                <div className="group-name">
                  <CustomInput
                    inputPlaceholder="Enter event name"
                    inputType="text"
                    inputId="group_name"
                    onChangeValue={this.handleNameChangeValue}
                  />
                </div>
                <div className="group-desc">
                  <CustomInput
                    inputPlaceholder="Enter short event description"
                    inputType="text"
                    inputId="group_desc"
                    onChangeValue={this.handleNameChangeValue}
                  />
                </div>
              </div>
              <div className="datepicker flex-property div-wrap">
                <label>Choose date of event</label>
                <DatePicker onChange={this.handleDateOnChange} value={this.state.date} />
              </div>
            </div>

            <div className="selected-members">
              <p>Selected friends:</p>
              {this.state.selectedId.map(friend => (
                <SelectedFriend
                  status="own"
                  key={friend.id}
                  friendEmail={friend.friendEmail}
                  friendName={friend.friendName}
                  removeFriendFromGroup={this.removeFriendFromGroup(friend.id)}
                />
              ))}
            </div>

            <div
              className="group-members"
              onMouseOver={() => (document.body.style.overflow = 'hidden')}
              onMouseOut={() => (document.body.style.overflow = 'auto')}
            >
              <p>Your suggested friends:</p>
              {this.state.temp.map(friend => (
                <FriendBox
                  status="own"
                  key={friend.id}
                  friendEmail={friend.friendEmail}
                  friendName={friend.friendName}
                  addToGroup={this.addFriendToGroup(friend.id)}
                />
              ))}
            </div>

            <input type="submit" className="submit button-font" />
          </form>
        </div>
      </div>
    );
  }
}
export default CreateGroup;
