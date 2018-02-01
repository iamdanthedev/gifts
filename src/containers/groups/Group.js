import React from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import { push } from 'react-router-redux';
import {
  addFriend,
  getGroupBalance,
  removeFriend,
  settleAll,
  settleFriend,
  validate,
  unsettleFriend,
} from './formUtils';
import GroupDetails from '../../components/groups/groupDetails/GroupDetails';
import groupQuery, { groupQueryWrappedTypes } from '../../queries/groupQuery';
// import settleGroupQuery, { settleGroupQueryProps } from '../../queries/settleGroupQuery';
import withUid, { withUidProps } from '../../utils/withUid';
import userQuery from '../../queries/userQuery';
import updateGroupQuery, { updateGroupQueryProps } from '../../queries/updateGroupQuery';
import leaveGroupQuery, { leaveGroupQueryProps } from '../../queries/leaveGroupQuery';

const Group = props => {
  const { dispatch } = props;

  if (!props.group) {
    // TODO: need some sort of <Error /> component
    return <div>Group not found</div>;
  }

  // TODO: ideally this should happen inside group's model, as well as all the other transformations

  // const balance = getGroupBalance(props.group, props.uid);
  const date = new Date(props.group.date);

  const group = {
    ...props.group,
    // balance,
    date,
    share: props.group.cost / (props.group.friends.length + 1),
    settledFriends: props.group.settledFriends || [],
  };

  // push group owner to group friends
  if (props.ownerInfo && props.ownerInfo.email) {
    group.friends = [props.ownerInfo.email, ...group.friends];
  }

  // remove ourselves from the group
  group.friends = group.friends.filter(f => f !== props.myEmail);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={group}
      onSubmit={(values, formik) => {
        props
          .updateGroup(props.id, values)
          .then(() => props.dispatch(push('/groups', { message: 'Group Saved' })))
          .catch(e => {
            // TODO: log error
            console.log('ERROR', e);
          });
      }}
      validate={validate}
      render={form => (
        <GroupDetails
          addFriend={email => addFriend(email, form)}
          getBalance={() => getGroupBalance(form.values, props.uid)}
          isOwner={group.owner === props.uid}
          onCancel={() => dispatch(push('/groups'))}
          onFriendSettle={email => settleFriend(email, form)}
          onFriendUnsettle={email => unsettleFriend(email, form)}
          onLeave={() => {
            props
              .leaveGroup(props.id)
              .then(() =>
                dispatch(
                  push('/groups', { message: `You have left the group "${group.name}"` }),
                ),
              );
          }}
          onSettle={() => settleAll(form)}
          onSubmit={() => form.submitForm()}
          owner={props.ownerInfo || {}}
          ownerUid={group.owner}
          removeFriend={email => removeFriend(email, form)}
          values={form.values}
          iAmSettled={form.values.settledFriends.includes(props.myEmail)}
        />
      )}
    />
  );
};

Group.propTypes = {
  ...groupQueryWrappedTypes,
  // ...settleGroupQueryProps,
  ...updateGroupQueryProps,
  ...leaveGroupQueryProps,
  ...withUidProps,
  myEmail: P.string.isRequired,
};

export default compose(
  withRouter,

  withUid,

  withProps(props => ({
    id: props.match.params.id,
  })),

  groupQuery,

  userQuery({ userIdPropName: 'group.owner', outPropName: 'ownerInfo' }),

  // settleGroupQuery,

  updateGroupQuery,

  leaveGroupQuery,

  connect(s => ({
    myEmail: s.firebase.auth.email,
  })),
)(Group);
