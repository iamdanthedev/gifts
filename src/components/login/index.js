import React, {Component} from 'react';
import CustomInput from '../customInput'
import {LoginRouter} from '../../containers/Login.js'
import './style.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			log_email: props.log_email
		};
		this.log_password = "";
		this.handleValue = this.handleValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.handlePass = this.handlePass.bind(this);
	}

	submitForm = (e) => {
		e.preventDefault();
		this.props.login(this.state.log_email, this.log_password);
	}
	handleValue = (key) => (e) => {
		this.setState({[key]: e.target.value})
	}
	handlePass = (key) => (e) => {
		this.log_password = e.target.value;
	}

	render() {
		return (
			<div className="max-w connect-wrap flex-property flex-center">
			<div className="login-content">
				<form className="div-wrap white-form white-box flex-property" onSubmit={this.submitForm}>

					<h4>Login</h4>
					<div className='inputs-column flex-property div-wrap'>
						<div className="form-input-elements">
							<CustomInput inputPlaceholder="Enter email" inputType="text" inputId="log_email" onChangeValue={this.handleValue}/>
							<CustomInput inputPlaceholder="Enter password" inputType="password" inputId="log_password" onChangeValue={this.handlePass}/>

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
