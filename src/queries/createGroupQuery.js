import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { compose, withProps } from 'recompose';
import withUid from '../utils/withUid';

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
        cost: parseFloat(group.cost),
        owner: props.uid
      });
    }
  }))
);
