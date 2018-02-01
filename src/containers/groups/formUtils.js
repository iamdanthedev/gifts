import uniq from 'lodash.uniq';

export const initialValues = {
  name: '',
  desc: '',
  cost: 0,
  date: new Date(),
  friends: [],
};

export const validate = data => {
  const errors = {};

  if (!data.name) {
    errors.name = 'Name should be set';
  }

  if (!data.desc) {
    errors.desc = 'Description is needed';
  }

  const costNum = parseFloat(data.cost);

  if (typeof costNum !== 'number' || costNum < 0) {
    errors.cost = 'Gift cost should be above 0';
  }

  if (!data.date) {
    errors.data = 'Date is missing';
  }

  if (!data.friends || data.friends.length === 0) {
    errors.friends = 'Please, add at least one friend';
  }

  return errors;
};

export const addFriend = (email, form) => {
  if (!email) {
    return ;
  }

  if (form.values.friends.includes(email)) {
    return;
  }

  form.setFieldValue('friends', [...form.values.friends, email]);
};

export const removeFriend = (email, form) =>
  form.setFieldValue('friends', form.values.friends.filter(id => id !== email));

export const settleFriend = (email, form) => {
  const allSettled = form.values.settledFriends || [];
  const settled = uniq([ ...allSettled, email ]);
  form.setFieldValue('settledFriends', settled);
};

export const unsettleFriend = (email, form) => {
  const allSettled = form.values.settledFriends || [];
  const settled = allSettled.filter(s => s !== email);
  form.setFieldValue('settledFriends', settled);
};

export const settleAll = form => {
  const allSettled = form.values.settledFriends || [];
  const settled = uniq([ ...allSettled, ...form.values.friends ]);
  form.setFieldValue('settledFriends', settled);
};

/**
 * Calculates users balance in a given group
 * @param group
 * @param uid
 */
export const getGroupBalance = (group, uid, myEmail) => {

  const parties = group.friends.length + 1; // number of invited people plus the owner
  const share = group.cost / parties; // Math.round(group.cost / parties * 100) / 100;
  const numSettled = group.settledFriends ? group.settledFriends.length : 0;

  // balance is negative if we owe, positive if they owe us
  return group.settled
    ? 0
    : group.owner === uid
      ? group.cost - group.cost / parties * (numSettled + 1)
      : myEmail
        ? group.settledFriends && group.settledFriends.includes(myEmail) ? 0 : -1 * share
        : -1 * share;

};