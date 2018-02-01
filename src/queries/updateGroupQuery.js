import P from 'prop-types';
import { withFirebase } from 'react-redux-firebase';
import { compose, withProps } from 'recompose';

export default compose(
  withFirebase,

  withProps(props => ({
    updateGroup: (id, group) => {

      if (!id) {
        return Promise.reject('missing group id');
      }


      return props.firebase.update(`groups/${id}`, {
        ...group,
        date: group.date ? group.date.valueOf() : Date.now(),
        cost: parseFloat(group.cost),
      });
    }
  }))
);

export const updateGroupQueryProps = {
  updateGroup: P.func.isRequired,
};
