import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from '../components/registerUser';
import Profile from '../components/profile';


import { asyncRegister } from '../actions/register.js';
import { withRouter } from 'react-router'
// import store from '../store';

const mapStateToProps = (state) => {
  return {
    users : state.users
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  registerUser: asyncRegister,
}, dispatch);



const RegisterRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))

export default RegisterRouter
