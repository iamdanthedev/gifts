import React from 'react';
import P from 'prop-types';
import { compose, withState } from 'recompose';
import CustomInput from '../customInput';

import './style.css';

const RegisterForm = props => (
  <div className="max-w connect-wrap flex-property flex-center">
    <div className="login-content">
      <form
        className="div-wrap white-form white-box flex-property"
        onSubmit={e => {
          e.preventDefault();
          props.registerUser(props.email, props.name, props.pass)
        }}
      >
        <h4>Register in few clicks!</h4>

        <div className="inputs-column flex-property div-wrap">
          <div className="form-input-elements">
            <CustomInput
              placeholder="Enter email"
              onChange={e => props.setEmail(e.target.value)}
            />

            <CustomInput
              placeholder="Enter password"
              type="password"
              onChange={e => props.setPass(e.target.value)}
            />

            <CustomInput
              placeholder="Choose username"
              onChange={e => props.setName(e.target.value)}
            />
          </div>
        </div>

        <div className="buttons-row flex-property">
          <input className="button-font submit" type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
);

RegisterForm.propTypes = {
  registerUser: P.func.isRequired,
  email: P.string,
  name: P.string,
  pass: P.string,
  setEmail: P.func.isRequired,
  setName: P.func.isRequired,
  setPass: P.func.isRequired
};

export default compose(
  withState('email', 'setEmail', ''),
  withState('name', 'setName', ''),
  withState('pass', 'setPass', '')
)(RegisterForm);
