import { push } from 'react-router-redux';
import { logout, register } from '../api/usersApi.js';

export const registerUser = () => ({
  type: 'REGISTER_USER_SUCCESS',
});

export const registerFailure = (code, message) => ({
  type: 'REGISTER_USER_FAILURE',
  payload: { code, message },
});

export const asyncRegister = (reg_email, reg_username, reg_pass) => async dispatch => {
  try {
    await register(reg_email, reg_username, reg_pass);
    dispatch(registerUser());
    dispatch(push('/home'));
  } catch (e) {
    // TODO: log event
    dispatch(registerFailure(e.code, e.message));
  }
};
