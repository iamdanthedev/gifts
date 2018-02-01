import React from 'react';
import P from 'prop-types';
import dateFormat from 'dateformat';
import InviteFriends from '../../layout/inviteFriends';
import FriendBox from '../../../containers/FriendBox';
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

      <SimpleBalance balance={props.getBalance()} />

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
          {props.owner.username} ({props.owner.email})
        </div>

        <div className="friends">
          <span className="title-info title-s">Friends in group</span>
          {props.values.friends &&
            props.values.friends.map(friend => (
              <FriendBox
                balance={props.values.share}
                isSettled={props.values.settledFriends.includes(friend)}
                onSettle={props.isOwner ? () => props.onFriendSettle(friend) : null}
                onUnsettle={props.isOwner ? () => props.onFriendUnsettle(friend) : null}
                key={friend}
                email={friend}
                onRemove={
                  props.isOwner && !props.values.settled
                    ? () => props.removeFriend(friend)
                    : null
                }
                status={
                  props.isOwner
                    ? props.values.settledFriends.includes(friend) ? 'clear' : 'owes'
                    : friend === props.owner.email
                      ? props.iAmSettled ? 'clear' : 'owe'
                      : 'clear' // TODO: this is real mess now
                }
              />
            ))}
        </div>
      </div>

      {props.isOwner &&
        !props.values.settled && (
          <div className="group-details__actions">
            <a className="submit button-font" onClick={props.onSubmit}>
              Save changes
            </a>
            <a className="submit button-font yellow-button" onClick={props.onCancel}>
              Cancel
            </a>
            <a className="submit button-font green-button" onClick={props.onSettle}>
              Settle up!
            </a>
          </div>
        )}

      {props.isOwner &&
        props.values.settled && (
          <div className="group-details__actions">
            <a className="submit button-font yellow-button" onClick={props.onCancel}>
              Close
            </a>
          </div>
        )}

      {!props.isOwner &&
        props.iAmSettled && (
          <div className="group-details__actions">
            <a className="submit button-font yellow-button" onClick={props.onLeave}>
              Leave
            </a>
          </div>
        )
      }

      {!props.isOwner &&
      !props.iAmSettled && (
        <div className="group-details__actions">
          You can't leave the group before the debt is settled
        </div>
      )
      }
    </div>
  </div>
);

GroupDetails.propTypes = {
  addFriend: P.func.isRequired,
  getBalance: P.func.isRequired,
  owner: P.shape({
    email: P.string,
    username: P.string,
  }),
  ownerUid: P.string,
  isOwner: P.bool,
  onCancel: P.func.isRequired,
  onFriendSettle: P.func.isRequired,
  onFriendUnsettle: P.func.isRequired,
  onLeave: P.func.isRequired,
  onSettle: P.func.isRequired,
  onSubmit: P.func.isRequired,
  removeFriend: P.func.isRequired,
  values: P.object.isRequired,

  // if I am a guest in the group and I am settled
  iAmSettled: P.bool,
};

GroupDetails.defaultProps = {
  owner: {
    email: '',
    username: '',
  },
};

export default GroupDetails;
