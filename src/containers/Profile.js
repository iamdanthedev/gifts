import React from 'react';

import Layout from '../components/profile/ProfileLayout';
import Groups from './Groups';

import InviteFriends from '../components/layout/inviteFriends'
import BalanceBox from '../components/balance'
import Friends from '../components/friends/containerFriends'


const Profile = props => {

  return (
    <Layout>
      <InviteFriends />
      <BalanceBox />
      <Groups />
      <Friends />
    </Layout>
  );

};

export default Profile;
