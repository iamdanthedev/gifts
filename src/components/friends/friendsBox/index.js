import React from 'react';
import P from 'prop-types';
import './style.css';

const FriendBox = ({ name, email, onAdd }) => (
  <div className="one-friend flex-property">
    <div className="friend-status color-owes" />

    <div className="friend-info flex-property div-wrap">
      <a className="friend-name">{name}</a>
      <p className="friend-email"> Email: {email}</p>
    </div>

    <div className="flex-center flex-property">
      <a className="add-friend" onClick={onAdd}>
        +
      </a>
    </div>
  </div>
);

FriendBox.propTypes = {
  status: P.string, // TODO: status is not being used in any way at the moment
  name: P.string.isRequired,
  email: P.string.isRequired,
  onAdd: P.func.isRequired,
};

export default FriendBox;
