import React, { Component } from 'react';
import Logo from '../img/logo.png';
import CustomInput from './customElements/customInput.js'

class SignIn extends Component{
  render(){
    return(
      <div className="login-wrapper content">
        <div className="login-form-wrap">
          <form className="white-form white-box flex-property">
            <h4>Welcome back!</h4>
            <div className='inputs-column flex-property'>

            <div className="form-input-elements">
              <CustomInput inputPlaceholder="Enter username" inputType="text" inputId="login_username"/>
              <CustomInput inputPlaceholder="Enter password" inputType="password" inputId="login_password"/>
            </div>
                <a className="" href="/random">Forgot password?</a>
            </div>
            <div className="buttons-row flex-property">
              <button className="standard-btn transparent-btn register">Register</button>
              <button className="standard-btn submit logo-blue-b">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default SignIn;
