import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../components/login';


import { asyncLogin } from '../actions/login.js';
import { withRouter } from 'react-router'
// import store from '../store';

const mapStateToProps = (state) => {
  return {
    users : state.users
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: asyncLogin,
}, dispatch);



const LoginRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))

export default LoginRouter
