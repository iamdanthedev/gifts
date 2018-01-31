import { withFirebase } from 'react-redux-firebase';
import P from 'prop-types';
import { compose, withProps } from 'recompose';

/**
 * sets 'settled' property of a group to true
 * passes props.settleGroup(groupId: string)
 */
export default compose(

  withFirebase,

  withProps(props => ({
    settleGroup: groupId => {
      if (!groupId) {
        return;
      }

      return props.firebase.set(`/groups/${groupId}/settled`, true);
    }
  }))

);

export const settleGroupQueryProps = {
  settleGroup: P.func.isRequired
};
