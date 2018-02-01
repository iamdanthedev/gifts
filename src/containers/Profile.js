import React from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { asyncInviteFriend } from '../actions/friends';

import Layout from '../components/profile/ProfileLayout';
import Groups from './groups/Groups';

import InviteFriends from '../components/layout/inviteFriends'


const Profile = props => {

  const { dispatch } = props;

  return (
    <Layout>
      <InviteFriends onSubmit={email => dispatch(asyncInviteFriend(email))} />
      <Groups showTotalBalance showFriends />
    </Layout>
  );

};

Profile.propTypes = {
  inviteFriend: P.func.isRequired,
};

export default compose(
  connect()
)(Profile);
