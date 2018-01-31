import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterForm from '../components/registerUser/RegisterForm';
import { asyncRegister } from '../actions/register.js';

const mapStateToProps = (state) => {
  return {
    users : state.users
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  registerUser: asyncRegister,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
