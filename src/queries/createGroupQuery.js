import P from 'prop-types';
import { withFirebase } from 'react-redux-firebase';
import { compose, withProps } from 'recompose';
import withUid from '../utils/withUid';

/**
 * Creates a new group.
 */
export default compose(
  withFirebase,

  withUid,

  withProps(props => ({
    createGroup: group => {
      if (!props.uid) {
        throw new Error('Missing user id');
      }

      return props.firebase.push('groups', {
        ...group,
        date: group.date ? group.date.valueOf() : Date.now(),
        cost: parseFloat(group.cost),
        owner: props.uid
      });
    }
  }))
);

export const createGroupQueryProps = {
  createGroup: P.func.isRequired
};
