import React from 'react';
import P from 'prop-types';
import GroupBox from './groupBox'

const GroupList = ({ items }) => (
  <div className="list-page">
    <div className="max-w groups white-box flex-property div-wrap">
      {items.map(item => (
        <GroupBox
          key={item.id}
          id={item.id}
          date={item.date}
          // status={item.status}
          name={item.name}
          balance={item.balance}
        />
      ))}
    </div>
  </div>
);

GroupList.propTypes = {
  items: P.arrayOf(P.shape({
    id: P.string.isRequired,
    name: P.string.isRequired,
    // status: P.oneOf(['owe', 'owes', 'clear']).isRequired,
    balance: P.string.isRequired
  }))
};

export default GroupList;
