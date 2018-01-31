import { connect } from 'react-redux';
import P from 'prop-types';

/**
 * Passes currect userId as props.uid down the line
 */
export default connect(s => ({
  uid: s.firebase.auth.uid,
}));

export const withUidProps = {
  uid: P.string,
}
