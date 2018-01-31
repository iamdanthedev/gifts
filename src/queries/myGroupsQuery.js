import { connect } from 'react-redux';
import { firebaseConnect, getVal, withFirebase } from 'react-redux-firebase';
import { compose, withProps } from 'recompose';
import withUid from '../utils/withUid';

/**
 * Passes groups which the user is the owner or a member into props.groups
 */
export default compose(
  withUid,

  firebaseConnect(props => {
    return ['groups'];
  }),

  connect(({ auth, firebase }) => {
    const allGroups = getVal(firebase.data, 'groups');

    if (!allGroups) {
      return {
        groups: []
      }
    }

    const groups = Object.keys(allGroups)
      .map(key => ({ ...allGroups[key], id: key, date: new Date(allGroups[key].date) }))
      .filter(
        group =>
          group.owner === firebase.auth.uid ||
          group.friends.includes(firebase.auth.email),
      );

    return {
      groups
    };
  }),
);
