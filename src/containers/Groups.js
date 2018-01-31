import React from 'react';
import { compose } from 'recompose';
import GroupList from '../components/groups/GroupList';
import myGroupsQuery from '../queries/myGroupsQuery';
import withUid from '../utils/withUid';

const Groups = props => {
  console.log('Groups Container', props);



  const groups = props.groups
    // date from timestamp
    .map(g => ({ ...g, date: new Date(g.date) }))

    // add status and amount per group
    .map(g => {

      // TODO: status 'clear' ?
      const status = g.owner === props.uid ? 'owes' : 'owe';
      const parties = g.friends.length + 1; // number of invited people plus the owner
      const share = g.cost / parties;

      // balance is negative if we owe, positive if they owe us
      const balance = g.owner === props.uid
        ? g.cost - share
        : -1 * share;

      return {
        ...g,
        balance,
      }

    })



  return <GroupList items={groups} />;
};

export default compose(withUid, myGroupsQuery)(Groups);
