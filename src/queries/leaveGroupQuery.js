import { connect } from 'react-redux';
import P from 'prop-types';
import { withFirebase } from 'react-redux-firebase';
import { compose, withProps } from 'recompose';

/**
 * Sets current user as one who left the group 'groupId'
 */
export default compose(
  connect(s => ({
    myEmail: s.firebase.auth.email,
  })),

  withFirebase,

  withProps(props => ({
    leaveGroup: (groupId) => {

      if (!groupId) {
        return Promise.reject('missing group id');
      }

      if (!props.myEmail) {
        return Promise.reject('something went wrong');
      }

      return props.firebase.push(`groups/${groupId}/friendsLeft`, props.myEmail);
    }
  }))
);

export const leaveGroupQueryProps = {
  leaveGroup: P.func.isRequired,
};
