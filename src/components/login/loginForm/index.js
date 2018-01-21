import React, { Component } from 'react';
import './style.css';

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      amountValue: props.amountValue,
    };
    // this.openGroupDetails = this.openGroupDetails.bind(this);
  }
  render(){
    return(
      <div className="form-input-elements">
        <CustomInput
          inputPlaceholder="Enter email"
          inputType="text"
          inputId="reg_email"
          onChangeValue={handleChange('reg_email')}/>
        <CustomInput
          inputPlaceholder="Enter password"
          inputType="password"
          inputId="reg_password"
          onChangeValue={handleChange('reg_password')}/>
        <CustomInput
          inputPlaceholder="Choose username"
          inputType="text"
          inputId="reg_username"
          onChangeValue={handleChange('reg_username')}/>
      </div>
    )
  }
}
export default LoginForm;
