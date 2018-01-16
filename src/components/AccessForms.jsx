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

  handleSubmit(event) {
   console.warn('Something is submitted: ' + this.state.emailInput + 'pass' + this.state.passInput);
   event.preventDefault();
 }

 checkIsRegister(){
   if(this.state.isRegister){
     return <a href="#" className="button-font submit" type="submit">Register</a>;
   }
   else if(!this.state.isRegister){
     return <a href="#" className="button-font submit" type="submit">Login</a>;
   }
 }

	render() {
		return (<div className="login-content">
			<form className="div-wrap white-form white-box flex-property" onSubmit={this.handleSubmit}>
				<h4>{this.state.formTitle}</h4>
				<div className='inputs-column flex-property div-wrap'>
					<div className="form-input-elements">
						<CustomInput
              inputPlaceholder="Enter email"
              inputType="text"
              inputId="login_email"
              value={this.state.emailInput}
            />
						<CustomInput
              inputPlaceholder="Enter password"
              inputType="password"
              inputId="login_password"
              value={this.state.passInput}
            />
					</div>
					{!this.state.isRegister &&
            <a className="link-font" href="/random">Forgot password?</a>
          }
				</div>
				<div className="buttons-row flex-property">
          {this.checkIsRegister()}
				</div>
			</form>
		</div>)
	}
}
export default AccessForms;
