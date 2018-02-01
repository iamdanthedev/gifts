import React from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { getGroupBalance } from './formUtils';
import GroupList from '../../components/groups/GroupList';
import myGroupsQuery, { myGroupsQueryProps } from '../../queries/myGroupsQuery';
import withUid, { withUidProps } from '../../utils/withUid';
import TotalBalance from '../../components/groupBalance/TotalBalance';
import Message from '../../components/Message';
import Friends from '../../components/friends/containerFriends'
import userQuery from '../../queries/userQuery';
import allUsersQuery, { allUsersQueryProps } from '../../queries/allUsersQuery';

/**
 * Disclaimer: all this functionality should be done differently
 */
const Groups = props => {

  /**
   * Prepare groups list
   */

  const groups = props.groups

    // filter out groups we have left
    .map(g => ({
      ...g,
      friendsLeft: g.friendsLeft
        ? Object.keys(g.friendsLeft).map(key => g.friendsLeft[key])
        : []
    }))
    .filter(g => g.friendsLeft ? !g.friendsLeft.includes(props.myEmail) : true)

    // date from timestamp
    .map(g => ({ ...g, date: new Date(g.date) }))

    // add status and amount per group
    .map(g => {
      const balance = getGroupBalance(g, props.uid, props.myEmail);

      return {
        ...g,
        balance,
      };
    });

  const credit = groups
    .filter(g => g.balance < 0)
    .map(g => g.balance)
    .reduce((p, c) => p + c, 0);
  const creditGroups = groups.filter(g => g.balance < 0).length;

  const debit = groups
    .filter(g => g.balance > 0)
    .map(g => g.balance)
    .reduce((p, c) => p + c, 0);
  const debitGroups = groups.filter(g => g.balance > 0).length;

  const total = credit + debit;
  const totalGroups = groups.length;


  /**
   * Get friends debts list
   */

  const friends = {};

  if (!props.showAllUsers && props.me && props.me.friends) {
    props.me.friends.forEach(f => friends[f] = 0);
  }
  else if (props.showAllUsers && props.allUsers) {
    Object.keys(props.allUsers).forEach(id => {
      if (props.allUsers[id].email && props.allUsers[id].email !== props.myEmail) {
        friends[props.allUsers[id].email] = 0;
      }
    });
  }

  groups.forEach(g => {

    const share = g.cost / (g.friends.length + 1);

    // if we are the owner of the group
    if (g.owner === props.uid) {
      g.friends.forEach(friend => {

        friends[friend] = friends[friend] || 0;

        // if he ows us then increase their debt
        if (!g.settledFriends || !g.settledFriends.includes(friend)) {
          friends[friend] += share;
        }

      })
    }

    // if we are guests in the group
    else {
      // get group owner email
      if (props.allUsers && props.allUsers[g.owner]) {

        const ownerEmail = props.allUsers[g.owner].email;

        if (!ownerEmail) {
          return;
        }

        friends[ownerEmail] = friends[ownerEmail] || 0;

        // if we are not settled - decrease group owners debt
        if (!g.settledFriends || !g.settledFriends.includes(props.myEmail)) {
          friends[ownerEmail] -= share;
        }

      }
    }

  });

  const friendList = Object.keys(friends)
    .map(email => ({
      email,
      balance: friends[email],
      status: friends[email] > 0 ? 'owes' : friends[email] < 0 ? 'owe' : 'clear'
    }));


  return (
    <React.Fragment>

      {props.location.state && props.location.state.message && (
        <Message>{props.location.state.message}</Message>
      )}

      {props.showTotalBalance && (
        <TotalBalance
          credit={credit}
          creditGroups={creditGroups}
          debit={debit}
          debitGroups={debitGroups}
          total={total}
          totalGroups={totalGroups}
        />
      )}

      {!props.hideGroups && (
        <GroupList items={groups} />
      )}


      {props.showFriends && (
        <Friends friends={friendList} onAdd={props.onUserAdd}  />
      )}
    </React.Fragment>
  );
};

Groups.propTypes = {
  ...myGroupsQueryProps,
  ...withUidProps,
  ...allUsersQueryProps,
  hideGroups: P.bool,
  showTotalBalance: P.bool,
  showFriends: P.bool,
  showAllUsers: P.bool, // if showFriends=true this will display ALL the users instead
  onUserAdd: P.func,
  myEmail: P.string,
  me: P.object, // my profile
};

export default compose(
  withRouter,
  withUid,
  myGroupsQuery,
  allUsersQuery,
  userQuery({ userIdPropName: 'uid', outPropName: 'me' }),
  connect(s => ({
    myEmail: s.firebase.auth.email
  }))
)(Groups);
