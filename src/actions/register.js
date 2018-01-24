import { register } from '../api/usersApi.js';
// import { push } from 'react-router-redux';

export const registerUser = (reg_email, reg_username, reg_pass) => ({
  type: 'REGISTER_USER',
  reg_email,
  reg_username,
  reg_pass
})

export const registerFailure = (message) => ({
  type: 'REGISTER_FAILURE',
  message
});

let id = 0;

export const asyncRegister = (reg_email, reg_username, reg_pass) => (dispatch) => {
  id++;
  console.log('2. pozove asyncRegister');
  register(id, reg_email, reg_username, reg_pass).then( user => {
      dispatch(registerUser(id, reg_email, reg_username, reg_pass));
      console.warn('3. udje u then -> nakon asyncRegistera');
    })
    // .catch(error => dispatch(registerFailure(error.message)));
};
