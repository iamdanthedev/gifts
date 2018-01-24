import { login } from '../api/usersApi.js';
// import { push } from 'react-router-redux';

export const loginUser = (log_email, log_password) => ({
  type: 'LOGIN_USER',
  log_email,
  log_password
})

export const loginFail = (message) => ({
  type: 'LOGIN_FAIL',
  message
});


export const asyncLogin = (log_email, log_password) => (dispatch) => {
  login(log_email, log_password).then( user => {
      dispatch(loginUser(log_email, log_password));
    })
    // .catch(error => dispatch(registerFailure(error.message)));
};
