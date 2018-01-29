import React, {Component} from 'react';
import DatePicker from 'react-date-picker'

import InviteFriends from '../../layout/inviteFriends'
import CustomInput from '../../customInput'
import FriendBox from '../../friends/friendsBox'
import GroupBalance from '../../groupBalance'
import SelectedFriend from '../../friends/selectedFriendBox'

import './style.css';

class GroupDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (<div className="group-details-wrap">
			<InviteFriends/>
			<div className="details-content white-box">
        <h4>Rehin rodjendan</h4>

				<GroupBalance/>

				<div className="group-detail-info">

					<div className="desc flex-property column-orient">
						<span className="title-info title-s">Group description</span>
						Poklon za Rehu, slusalice
					</div>
					<div className="date flex-property column-orient">
						<span className="title-info title-s">Date</span>
						21.01.2018
					</div>

					<div className="friends">
						<span className="title-info title-s">Friends in group</span>
						<FriendBox/>
						<FriendBox/>
						<FriendBox/>
						<FriendBox/>
						<FriendBox/>
					</div>
				</div>

				<a className="submit button-font" href="">Save changes</a>
				<a className="submit button-font green-button" href="">Settle up!</a>

			</div>
		</div>)
	}
}

export default GroupDetails
