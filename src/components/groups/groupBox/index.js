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
    ? `You owe $${balance}`
    : balance > 0
      ? `You are owed $${balance}`
      : 'Balance cleared';


  return (
    <Link to={`/group/${props.id}`} className="one-group white-box flex-property flex-center">
      <div className={`group-status group-color-${status}`}>
        <p className="group-members flex-property flex-center">{props.date && props.date.getDate()}</p>
      </div>
      <div className="group-info flex-property div-wrap">
        <span>{dateFormat(props.date, 'dmmm')}</span>
        <div className="group-name">{props.name}</div>
        <p className="group-my-status">{str}</p>
      </div>
    </Link>
  );
};

GroupBox.propTypes = {
  balance: P.number.isRequired,
  date: P.instanceOf(Date),
  id: P.string.isRequired,
  name: P.string.isRequired,
  // status: P.string.isRequired,
};


export default GroupBox;
