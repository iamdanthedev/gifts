import { addFriend } from '../api/usersApi';

export const inviteFriendSuccess = ({ email }) => ({
  type: 'INVITE_FRIEND_SUCCESS',
  payload: { email }
});

export const inviteFriendFailed = e => ({
  type: 'INVITE_FRIEND_FAIL',
  payload: e
});

export const asyncInviteFriend = email => async dispatch => {
  try {
    await addFriend(email);
    dispatch(inviteFriendSuccess({ email }));
  }
  catch(e) {
    dispatch(inviteFriendFailed(e));
  }
};
