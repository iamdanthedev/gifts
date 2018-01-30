import React, {Component} from 'react';
import CustomInput from '../customInput'
import {RegisterUserRouter} from '../../containers/Register.js'

import './style.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reg_email: props.reg_email,
      reg_username: props.reg_username
    };
    this.reg_pass = "";
    this.handleValue = this.handleValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state.reg_email, this.state.reg_username, this.reg_pass);
  }
  handleValue = (key) => (e) => {
    this.setState({[key]: e.target.value})
  }
  handlePass = (key) => (e) => {
    this.reg_pass = e.target.value;
  }
  render() {
    return (<div className="max-w connect-wrap flex-property flex-center">
      <div className="login-content">
        <form className="div-wrap white-form white-box flex-property" onSubmit={this.submitForm}>
          <h4>Register in few clicks!</h4>
          <div className='inputs-column flex-property div-wrap'>
            <div className="form-input-elements">
              <CustomInput inputPlaceholder="Enter email" inputType="text" inputId="reg_email" onChangeValue={this.handleValue}/>
              <CustomInput inputPlaceholder="Enter password" inputType="password" inputId="reg_password" onChangeValue={this.handlePass}/>
              <CustomInput inputPlaceholder="Choose username" inputType="text" inputId="reg_username" onChangeValue={this.handleValue}/>
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
