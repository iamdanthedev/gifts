import React, { Component } from 'react';
import styles from './style.css';

class InviteFriends extends Component{
  constructor(props) {
		super(props);
		this.state = {
			emailInvite: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  onInviteChangeValue = e => this.setState({emailInvite: e.target.value});

  handleSubmit(e) {
		this.setState({emailInvite: this.state.emailInvite});
		console.log('Invite bar: Email: ' + this.state.emailInvite);
	}

  render(){
    return(
      <div className="invite-bar white-box flex-property">
        <form className="flex-property flex-center" onSubmit={(e) => {
  					this.handleSubmit();
  					e.preventDefault();
  				}}>

          <input
            id="searchBar"
            type="email"
            className='floated'
            required
            autoComplete='off'
            placeholder="Enter friends email ..."
            onChange={this.onInviteChangeValue}
          />
          <input className="button-font submit" type="submit" value="Invite"/>
        </form>
      </div>
    )
  }
}
export default InviteFriends;
