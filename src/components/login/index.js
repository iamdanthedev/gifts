import React, {Component} from 'react';
import CustomInput from '../customInput'

import './style.css';

class Login extends Component {
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
		return (
			<div className="max-w connect-wrap flex-property flex-center">
			<div className="login-content">
				<form className="div-wrap white-form white-box flex-property" onSubmit={(e) => {
						this.handleSubmit();
						e.preventDefault();
					}}>

					<h4>Login</h4>
					<div className='inputs-column flex-property div-wrap'>
						<div className="form-input-elements">
							<CustomInput inputPlaceholder="Enter email" inputType="text" inputId="log_email" onChangeValue={this.handleEmailChangeValue}/>
							<CustomInput inputPlaceholder="Enter password" inputType="password" inputId="log_password" onChangeValue={this.handlePassChangeValue}/>

						</div>
						<a className="link-font" href="/random">Forgot password?</a>
					</div>
					<div className="buttons-row flex-property">
						<input className="button-font submit" type="submit" value="Login"/>
					</div>
				</form>
			</div>
		</div>)
	}
}
export default Login;
