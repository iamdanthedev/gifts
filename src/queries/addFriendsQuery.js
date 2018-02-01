import P from 'prop-types';
import { withFirebase } from 'react-redux-firebase';
import { compose, withProps } from 'recompose';
import uniq from 'lodash.uniq';
import withUid from '../utils/withUid';

/**
 * Add friends to currect users. Expects array of friends as an argument
 */
export default compose(
  withFirebase,

  withUid,

  withProps(props => ({
    addFriends: async friends => {
      if (!props.uid) {
        throw new Error('Missing user id');
      }

      const existingFriendsRef = await props.firebase
        .ref(`users/${props.uid}/friends`)
        .once('value');

      const existingFriends = existingFriendsRef.val() || [];

      const allFriends = uniq([...existingFriends, ...friends]);

      return props.firebase
        .ref(`users/${props.uid}/friends`)
        .set(allFriends);

    }
  }))
);

export const addFriendsQueryProps = {
  addFriends: P.func.isRequired
};
