import React from 'react';
import { compose } from 'recompose';
import { getGroupBalance } from './formUtils';
import GroupList from '../../components/groups/GroupList';
import myGroupsQuery from '../../queries/myGroupsQuery';
import withUid from '../../utils/withUid';

const Groups = props => {
  console.log('Groups Container', props);

  const groups = props.groups
    // date from timestamp
    .map(g => ({ ...g, date: new Date(g.date) }))

    // add status and amount per group
    .map(g => {

      const balance = getGroupBalance(g, props.uid);

      return {
        ...g,
        balance,
      };
    });

  return <GroupList items={groups} />;
};

export default compose(withUid, myGroupsQuery)(Groups);
