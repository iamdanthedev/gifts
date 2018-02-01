import P from 'prop-types';
import { withFirebase } from 'react-redux-firebase';
import { compose, withProps } from 'recompose';

/**
 * Passes a function to props.deleteGroup to delete group
 */
export default compose(
  withFirebase,

  withProps(props => ({
    deleteGroup: (id) => {

      if (!id) {
        return Promise.reject('missing group id');
      }

      return props.firebase.remove(`groups/${id}`);
    }
  }))
);

export const deleteGroupQueryProps = {
  deleteGroup: P.func.isRequired,
};
