import React, {Component} from 'react';
import CustomInput from '../customInput'

import styles from './style.css';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailInput: '',
			passInput: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmailChangeValue = e => this.setState({emailInput: e.target.value});
	handlePassChangeValue = e => this.setState({passInput: e.target.value});
	handleSubmit(e) {
		this.setState({passInput: this.state.passInput, emailInput: this.state.emailInput});
		console.log('Submit: Email: ' + this.state.emailInput + ' - password: ' + this.state.passInput);
	}

	render() {
		return (<div className="max-w connect-wrap flex-property flex-center">
			<div className="login-content">
				<form className="div-wrap white-form white-box flex-property" onSubmit={(e) => {
						this.handleSubmit();
						e.preventDefault();
					}}>

					<h4>Register in few clicks!</h4>
					<div className='inputs-column flex-property div-wrap'>
						<div className="form-input-elements">
							<CustomInput inputPlaceholder="Enter email" inputType="text" inputId="reg_email" onChangeValue={this.handleEmailChangeValue}/>
							<CustomInput inputPlaceholder="Enter password" inputType="password" inputId="reg_password" onChangeValue={this.handlePassChangeValue}/>
							<CustomInput inputPlaceholder="Choose username" inputType="text" inputId="reg_username" onChangeValue={this.handleUsernameChangeValue}/>
						</div>
					</div>
					<div className="buttons-row flex-property">
						<input className="button-font submit" type="submit" value="Register"/>
					</div>
				</form>
			</div>
		</div>)
	}
}
export default Register;
