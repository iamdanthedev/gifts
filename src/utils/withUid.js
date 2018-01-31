import { connect } from 'react-redux';

/**
 * Passes currect userId as props.uid down the line
 */
export default connect(s => ({
  uid: s.firebase.auth.uid,
}));
