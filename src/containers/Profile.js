import React from 'react';
import { compose } from 'recompose';

import Layout from '../components/profile/ProfileLayout';
import Groups from './groups/Groups';

import InviteFriends from '../components/layout/inviteFriends'
import addFriendsQuery, { addFriendsQueryProps } from '../queries/addFriendsQuery';


const Profile = props => {

  return (
    <Layout>
      <InviteFriends onSubmit={email => props.addFriends([email])} />
      <Groups showTotalBalance showFriends />
    </Layout>
  );

};

Profile.propTypes = {
  ...addFriendsQueryProps,
};

export default compose(
  addFriendsQuery,
)(Profile);
