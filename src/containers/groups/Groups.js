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

const Groups = props => {
  console.log('Groups Container', props);

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

      <GroupList items={groups} />
    </React.Fragment>
  );
};

Groups.propTypes = {
  ...myGroupsQueryProps,
  ...withUidProps,
  showTotalBalance: P.bool,
  myEmail: P.string
};

export default compose(
  withRouter,
  withUid,
  myGroupsQuery,
  connect(s => ({
    myEmail: s.firebase.auth.email
  }))
)(Groups);
