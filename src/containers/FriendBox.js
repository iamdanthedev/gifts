import React from 'react';
import { compose } from 'recompose';
import userQuery, { userQueryProps } from '../queries/userQuery';
import FriendBoxCont from '../components/friends/friendsBox';

const FriendBox = props => {

  const { user, ...rest } = props;

  return <FriendBoxCont
    email={user ? user.email : ''}
    name={user ? user.username : ''}
    {...rest}
  />

};

FriendBox.propTypes = {
  ...userQueryProps,
  ...FriendBox.propTypes
};

export default compose(

  userQuery({})

)(FriendBox);
