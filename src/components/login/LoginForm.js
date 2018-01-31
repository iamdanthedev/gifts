import React from 'react';
import { withState } from 'recompose';
import P from 'prop-types';
import CustomInput from './customInput';

import './style.css';

const Login = props => {
    return (
      <div className="max-w connect-wrap flex-property flex-center">
        <div className="login-content">
          <form
            className="div-wrap white-form white-box flex-property"
            onSubmit={e => {
              e.preventDefault();
              props.login(props.email, props.pass)
            }}
          >
            <h4>Login</h4>

            <div className="inputs-column flex-property div-wrap">
              <div className="form-input-elements">
                <CustomInput
                  placeholder="Enter email"
                  onChange={props.setEmail}
                  value={props.email}
                />

                <CustomInput
                  placeholder="Enter password"
                  onChange={props.setPass}
                  value={props.pass}
                />
              </div>

              <Link className="link-font" to="/random">Forgot password?</Link>

            </div>
            <div className="buttons-row flex-property">
              <input className="button-font submit" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );
};

Login.propTypes = {
  login: P.func.isRequired,
  email: P.string,
  pass: P.string,
  setEmail: P.func.isRequired,
  setPass: P.func.isRequired
};

export default compose(
  withState('email', 'setEmail', ''),
  withState('pass', 'setPass', ''),
)(Login);
