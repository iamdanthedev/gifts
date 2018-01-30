import { logout, register } from '../api/usersApi.js';

export const registerUser = () => ({
  type: 'REGISTER_USER_SUCCESS',
});

export const registerFailure = (code, message) => ({
  type: 'REGISTER_USER_FAILURE',
  payload: { code, message }
});

export const asyncRegister = (reg_email, reg_username, reg_pass) => (dispatch) => {

  register(reg_email, reg_username, reg_pass)
    .then(user => dispatch(registerUser()))
    .catch(e => dispatch(registerFailure(e.code, e.message)));
};
