import { connect } from 'react-redux';
import { compose, setPropTypes } from 'recompose';
import P from 'prop-types';
import { firebaseConnect, getVal } from 'react-redux-firebase';

/**
 * Extracts a user's profile. expects props.id, props.email or custom
 * propname 'userIdPropName'.
 *
 * Passes user info to props.user by default
 */
export default ({ userIdPropName, outPropName = 'user' }) => compose(

  firebaseConnect(props => {
    return ['users'];
  }),

  connect(({ firebase }, props) => {

    let user = null;
    const users = firebase.data.users;

    // by custom userIdPropname
    if (users && userIdPropName) {
      const userid = getVal(props, userIdPropName);

      if (userid) {
        user = users[userid];
      }
    }

    // by props.id
    else if (users && props.id) {
      user = users[props.id];
    }

    // by props.email
    else if (users && props.email) {
      user = Object.keys(users)
        .map(uid => ({ ...users[uid], uid }))
        .find(u => u.email === props.email)
    }

    return {
      [outPropName]: user
    };
  })
)

export const userQueryProps = {
  user: P.object
};
