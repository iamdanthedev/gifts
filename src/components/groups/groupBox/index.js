import React  from 'react';
import P from 'prop-types';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

import './style.css';

const GroupBox = props => {

  const { balance } = props;

  const status = balance < 0
    ? 'owe'
    : balance > 0
      ? 'owes'
      : 'clear';

  const str = balance < 0
    ? `You owe $${Math.abs(balance).toFixed(2)}`
    : balance > 0
      ? `You are owed $${balance.toFixed(2)}`
      : 'Balance cleared';


  return (
    <Link to={`/group/${props.id}`} className="one-group white-box flex-property flex-center">
      <div className={`group-status group-color-${status}`}>
        <p className="group-members flex-property flex-center">{balance.toFixed(2)}$</p>
      </div>
      <div className="group-info flex-property div-wrap">
        <span>
          {dateFormat(props.date, 'dmmm')}
        </span>
        <div className="group-name">{props.name}</div>
        <p className="group-my-status">{str}</p>
      </div>

      {props.onRemove && (
        <span onClick={e => {
          e.preventDefault();
          props.onRemove(props.id);
        }}>&ndash;</span>
      )}
    </Link>
  );
};

GroupBox.propTypes = {
  balance: P.number.isRequired,
  date: P.instanceOf(Date),
  id: P.string.isRequired,
  name: P.string.isRequired,
  onRemove: P.func,
  // status: P.string.isRequired,
};


export default GroupBox;
