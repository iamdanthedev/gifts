import React from 'react';
import P from 'prop-types';
import { compose } from 'recompose';
import userQuery, { userQueryProps } from '../queries/userQuery';
import FriendBoxCont from '../components/friends/friendsBox';
import SelectFriendBox from '../components/friends/selectedFriendBox';

const FriendBox = props => {

  const { user, ...rest } = props;

  const Comp = props.isSelector ? SelectFriendBox : FriendBoxCont;

  return <Comp
    email={user ? user.email : ''}
    name={user ? user.username : ''}
    {...rest}
  />

};

FriendBox.propTypes = {
  ...userQueryProps,
  ...FriendBox.propTypes,
  isSelector: P.bool
};

export default compose(

  userQuery({})

)(FriendBox);
