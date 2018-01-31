import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncLogin } from '../actions/login.js';
import Form from '../components/login/LoginForm';

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: asyncLogin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Form);

