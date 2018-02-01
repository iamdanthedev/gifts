import React from 'react';
import P from 'prop-types';
import FriendBox from '../../../containers/FriendBox';

const Friends = ({ friends }) => {
  return (
    <div
      style={{ marginTop: '20px' }}
      className="max-w friends white-box flex-property div-wrap"
    >
      {friends.map(friend => (
        <FriendBox
          key={friend.email}
          {...friend}
        />
      ))}
    </div>
  );
};

Friends.propTypes = {
  friends: P.arrayOf(FriendBox.propTypes).isRequired
};

export default Friends;
