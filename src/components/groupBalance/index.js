import React from 'react';
import P from 'prop-types';

import './style.css';

const GroupBalance = props => (
  <div className="balance-box white-box flex-property">
    <div className="balance-part flex-property flex-center div-wrap">
      <h5>Total</h5>
      <h6>${props.total}</h6>
      <p>
        in <span>{props.totalGroups} groups</span>
      </p>
    </div>
    <div className="balance-part flex-property flex-center div-wrap">
      <h5>You owe</h5>
      <h6>${props.credit}</h6>
      <p>
        in <span>{props.creditGroups} groups</span>
      </p>
    </div>
    <div className="balance-part flex-property flex-center div-wrap">
      <h5>You are owed</h5>
      <h6>${props.debit}</h6>
      <p>
        in <span>{props.debitGroups} groups</span>
      </p>
    </div>
  </div>
);

GroupBalance.propTypes = {
  total: P.number.isRequired,
  totalGroups: P.number.isRequired,
  credit: P.number.isRequired,
  creditGroups: P.number.isRequired,
  debit: P.number.isRequired,
  debitGroups: P.number.isRequired
};

export default GroupBalance;
