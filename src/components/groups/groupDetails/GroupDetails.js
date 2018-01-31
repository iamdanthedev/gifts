import React from 'react';
import P from 'prop-types';
import dateFormat from 'dateformat';
import InviteFriends from '../../layout/inviteFriends';
import FriendBox from '../../friends/friendsBox';
import SimpleBalance from '../../groupBalance/SimpleBalance';

import './style.css';

const GroupDetails = props => (
  <div className="group-details-wrap">

    {props.isOwner && (
      <InviteFriends
        onSubmit={email => props.addFriend(email)}
        disabled={props.values.settled}
      />
    )}

    <div className="details-content white-box">
      <h4>{props.values.name}</h4>

      <SimpleBalance balance={props.values.balance} />

      <div className="group-detail-info">

        <div className="desc flex-property column-orient">
          <span className="title-info title-s">Description</span>
          {props.values.desc}
        </div>

        <div className="date flex-property column-orient">
          <span className="title-info title-s">Date</span>
          {props.values.date && dateFormat(props.values.date, 'dd.mm.yyyy')}
        </div>

        <div className="date flex-property column-orient">
          <span className="title-info title-s">Gift Cost</span>
          ${props.values.cost}
        </div>

        <div className="date flex-property column-orient">
          <span className="title-info title-s">Group Owner</span>
          {props.owner}
        </div>

        <div className="friends">
          <span className="title-info title-s">Friends in group</span>
          {props.values.friends &&
            props.values.friends.map(friend => (
              <FriendBox
                key={friend}
                name={'TODO: ADD NAME'}
                email={friend}
                onRemove={(props.isOwner && !props.values.settled) ? () => props.removeFriend(friend) : null}
              />
            ))}
        </div>
      </div>

      {!props.values.settled && (
        <div className="group-details__actions">
          <a className="submit button-font" onClick={props.onSubmit}>Save changes</a>
          <a className="submit button-font yellow-button" onClick={props.onCancel}>Cancel</a>
          <a className="submit button-font green-button" onClick={props.onSettle}>Settle up!</a>
        </div>
      )}

      {props.values.settled && (
        <div className="group-details__actions">
          <a className="submit button-font yellow-button" onClick={props.onCancel}>Close</a>
        </div>
      )}


    </div>
  </div>
);

GroupDetails.propTypes = {
  addFriend: P.func.isRequired,
  owner: P.string,
  isOwner: P.bool,
  onCancel: P.func.isRequired,
  onSettle: P.func.isRequired,
  onSubmit: P.func.isRequired,
  removeFriend: P.func.isRequired,
  values: P.object.isRequired,
};

export default GroupDetails;
