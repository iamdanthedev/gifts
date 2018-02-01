import React from 'react';
import P from 'prop-types';
import './style.css';

const FriendBox = ({ isSettled, name, email, onAdd, onRemove, onSettle, status }) => (
  <div className="one-friend flex-property">
    <div className={`friend-status color-${status}`} />

    <div className="friend-info flex-property div-wrap">
      <a className="friend-name">{name}</a>
      <p className="friend-email"> Email: {email}</p>
    </div>

    <div className="friend-spacer" />

    {!isSettled && (
      <div className="friend-settle flex-center flex-property">
        <a className="add-friend yellow-button" onClick={onSettle}>Settle</a>
      </div>
    )}

    <div className="flex-center flex-property">
      {onAdd && (
        <a className="add-friend" onClick={onAdd}>+</a>
      )}

      {onRemove && (
        <a className="add-friend" onClick={onRemove}>&ndash;</a>
      )}
    </div>
  </div>
);

FriendBox.propTypes = {
  isSettled: P.bool,
  onSettle: P.func.isRequired,
  email: P.string.isRequired,
  name: P.string.isRequired,
  onAdd: P.func,
  onRemove: P.func,
  status: P.string, // TODO: status is not being used in any way at the moment
};

export default FriendBox;
