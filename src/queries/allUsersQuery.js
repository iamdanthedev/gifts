import { connect } from 'react-redux';
import { compose } from 'recompose';
import P from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';

export default compose(

  firebaseConnect(props => {
    return ['users'];
  }),

  connect(({ firebase }, props) => {
    return {
      allUsers: firebase.data.users
    }
  })
)

export const allUsersQueryProps = {
  allUsers: P.object
};
