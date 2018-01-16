import React, {Component} from 'react';
import CustomInput from './customElements/customInput.js'

class AccessForms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formTitle: props.formTitle,
			isRegister: props.isRegister,
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

	checkIsRegister() {
		if (this.state.isRegister) {
			return <input className="button-font submit" type="submit" value="Register"/>
		} else if (!this.state.isRegister) {
			return <input className="button-font submit" type="submit" value="Login"/>
		}
	}

	render() {
		return (<div className="login-content">
			<form className="div-wrap white-form white-box flex-property" onSubmit={(e) => {
					this.handleSubmit();
					e.preventDefault();
				}}>

				<h4>{this.state.formTitle}</h4>
				<div className='inputs-column flex-property div-wrap'>
					<div className="form-input-elements">
						<CustomInput
							inputPlaceholder="Enter email"
							inputType="text"
							inputId="login_email"
							onChangeValue={this.handleEmailChangeValue}
							// value={this.state.emailInput}
						/>
						<CustomInput
							inputPlaceholder="Enter password"
							inputType="password"
							inputId="login_password"
							onChangeValue={this.handlePassChangeValue}
							// value={this.state.passInput}
						/>
					</div>
					{!this.state.isRegister && <a className="link-font" href="/random">Forgot password?</a>}
				</div>
				<div className="buttons-row flex-property">
					{this.checkIsRegister()}
				</div>
			</form>
		</div>)
	}
}
export default AccessForms;
