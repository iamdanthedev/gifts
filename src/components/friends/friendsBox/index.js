import React from 'react';
import P from 'prop-types';
import './style.css';

const FriendBox = ({
  balance,
  isSettled,
  name,
  email,
  onAdd,
  onRemove,
  onSettle,
  onUnsettle,
  status,
}) => (
  <div className="one-friend flex-property">
    <div className={`friend-status color-${status} flex-property flex-center`}>
      {status !== 'clear' && balance && <div>{balance.toFixed(2)}$</div>}
    </div>

    <div className="friend-info flex-property div-wrap">
      <a className="friend-name">{name}</a>
      <p className="friend-email"> Email: {email}</p>
    </div>

    <div className="friend-spacer" />

    {!isSettled &&
      onSettle && (
        <div className="friend-settle flex-center flex-property">
          <a className="add-friend yellow-button" onClick={onSettle}>
            Settle
          </a>
        </div>
      )}

    {isSettled &&
      onUnsettle && (
        <div className="friend-settle flex-center flex-property">
          <a className="add-friend yellow-button" onClick={onUnsettle}>
            Unsettle
          </a>
        </div>
      )}

    <div className="flex-center flex-property">
      {onAdd && (
        <a className="add-friend" onClick={onAdd}>
          +
        </a>
      )}

      {onRemove && (
        <a className="add-friend" onClick={onRemove}>
          &ndash;
        </a>
      )}
    </div>
  </div>
);

FriendBox.propTypes = {
  balance: P.number,
  isSettled: P.bool,
  onSettle: P.func,
  onUnsettle: P.func,
  email: P.string.isRequired,
  name: P.string.isRequired,
  onAdd: P.func,
  onRemove: P.func,
  status: P.string,
};

export default FriendBox;
