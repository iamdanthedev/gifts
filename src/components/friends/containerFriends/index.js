import React from 'react';
import P from 'prop-types';
import FriendBox from '../../../containers/FriendBox';

const noop = () => {};

const Friends = ({ onAdd, friends }) => {
  return (
    <div
      style={{ marginTop: '20px' }}
      className="max-w friends white-box flex-property div-wrap"
    >
      {friends.map(friend => (
        <FriendBox
          key={friend.email}
          {...friend}
          onAdd={() => onAdd ? onAdd(friend.email) : noop()}
        />
      ))}
    </div>
  );
};

Friends.propTypes = {
  onAdd: P.func,
  friends: P.array,
};

export default Friends;
