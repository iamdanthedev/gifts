import React, { Component } from 'react';
import CustomInput from './customElements/customInput.js'

class ForgotPassword extends Component{
  render(){
    return(
      <div className="login-wrapper content forgot-password">
        <div className="login-form-wrap">
          <form className="white-form white-box flex-property">
            <h4>Forgot your password?</h4>
            <div className='inputs-column flex-property'>
              <p className="thin-title center-title">Please enter your email address here, and we will send you an confirmation email for changing your password</p>
              <div className="form-input-elements">
                <CustomInput inputPlaceholder="Enter email" inputType="text" inputId="forget_password"/>
              </div>
            </div>
            <div className="buttons-row flex-property">
              <button className="standard-btn transparent-btn register">Send</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default ForgotPassword;
