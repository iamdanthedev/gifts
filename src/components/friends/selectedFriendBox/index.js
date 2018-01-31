import React from 'react';
import P from 'prop-types';

const SelectedFriend = props => (
  <div className="selected-friend one-friend flex-property">
    <div className="friend-info flex-property div-wrap">
      <a className="friend-name">{props.name || ''}</a>
      <p className="friend-email"> Email: {props.email}</p>
    </div>
    <div className="flex-center flex-property">
      <a className="remove-friend" onClick={props.onRemove}>
        -
      </a>
    </div>
  </div>
);

SelectedFriend.propTypes = {
  name: P.string,
  email: P.string.isRequired,
  onRemove: P.func.isRequired,
};

export default SelectedFriend;
