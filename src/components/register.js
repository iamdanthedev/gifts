import React, { Component } from 'react';
import Logo from '../img/logo.png';
import CustomInput from './customElements/customInput.js'

class Register extends Component{
  render(){
    return(
      <div className="login-wrapper content">
        <div className="login-form-wrap">
          <form className="white-form white-box flex-property">
            <img className="logo" src={Logo}  alt="Logo"/>
            <h4>Join us!</h4>
            <div className='inputs-column flex-property'>

            <div className="form-input-elements">
                 <CustomInput inputPlaceholder="Choose username" inputType="text" inputId="register_username"/>
                 <CustomInput inputPlaceholder="Choose password" inputType="password" inputId="register_password"/>
                 <CustomInput inputPlaceholder="Enter your email" inputType="text" inputId="register_email"/>
            </div>
            <a href="/login">Already have an account?</a>

            </div>
            <div className="buttons-row flex-property">
              <button className="standard-btn submit logo-blue-b">Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Register;
