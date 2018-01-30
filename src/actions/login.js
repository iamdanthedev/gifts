import { login, logout } from '../api/usersApi.js';
import { replace } from 'react-router-redux';

export const loginUser = (log_email, log_password) => ({
  type: 'LOGIN_USER',
  log_email,
  log_password,
});

export const loginFail = message => ({
  type: 'LOGIN_FAIL',
  message,
});

export const asyncLogin = (log_email, log_password) => async dispatch => {
  try {
    await login(log_email, log_password);
    dispatch(loginUser(log_email, log_password));
    dispatch(replace('/profile'));
  }
  catch(e) {
    dispatch(registerFailure(error.message));
  }
};

export const asyncLogout = () => async dispatch => {
  try {
    await logout();
    dispatch(replace('/login'));
  }
  catch(e) {
    // TODO: do something
  }
};
