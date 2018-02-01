import React from 'react';
import P from 'prop-types';

import './style.css';

const SimpleBalance = ({ balance }) => (
  <div className="balance-box white-box flex-property">

    <div className="balance-part flex-property flex-center div-wrap">
      {balance === 0 && <h5>Balance settled!</h5>}

      {balance < 0 && (
        <React.Fragment>
          <h5>You owe</h5>
          <h6>${Math.abs(balance).toFixed(2)}</h6>
        </React.Fragment>
      )}

      {balance > 0 && (
        <React.Fragment>
          <h5>You are owed</h5>
          <h6>${balance.toFixed(2)}</h6>
        </React.Fragment>
      )}

    </div>

  </div>
);

SimpleBalance.propTypes = {
  balance: P.number.isRequired,
};

export default SimpleBalance;
