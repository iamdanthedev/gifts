import React from 'react';
import P from 'prop-types';
import { compose } from 'recompose';
import { getGroupBalance } from './formUtils';
import GroupList from '../../components/groups/GroupList';
import myGroupsQuery, { myGroupsQueryProps } from '../../queries/myGroupsQuery';
import withUid, { withUidProps } from '../../utils/withUid';
import TotalBalance from '../../components/groupBalance/TotalBalance';

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
};

export default compose(withUid, myGroupsQuery)(Groups);
