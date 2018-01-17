import React, { Component } from 'react';

class BalanceBox extends Component{
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
      <div className="balance-box white-box flex-property">
        <div className="balance-part flex-property flex-center div-wrap">
          <h5>Total</h5>
          <h6>+9$</h6>
          <p>in <span>13 groups</span></p>
        </div>
        <div className="balance-part flex-property flex-center div-wrap">
          <h5>You are owing</h5>
          <h6>12$</h6>
          <p>in <span>13 groups</span></p>
        </div>
        <div className="balance-part flex-property flex-center div-wrap">
          <h5>You are owed</h5>
          <h6>21$</h6>
          <p>in <span>9 groups</span></p>
        </div>
      </div>
    )
  }
}
export default BalanceBox;
