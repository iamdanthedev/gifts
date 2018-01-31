import React from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import { push } from 'react-router-redux';
import { addFriend, getGroupBalance, removeFriend, validate } from './formUtils';
import GroupDetails from '../../components/groups/groupDetails/GroupDetails';
import groupQuery, { groupQueryWrappedTypes } from '../../queries/groupQuery';
import settleGroupQuery, { settleGroupQueryProps } from '../../queries/settleGroupQuery';
import withUid, { withUidProps } from '../../utils/withUid';

const Group = props => {

  const { dispatch } = props;

  if (!props.group) {
    // TODO: need some sort of <Error /> component
    return <div>Group not found</div>;
  }

  // TODO: ideally this should happen inside group's model, as well as all the other transformations

  const balance = getGroupBalance(props.group, props.uid);
  const date = new Date(props.group.date);

  const group = {
    ...props.group,
    balance,
    date
  };

  return  (
    <Formik
      enableReinitialize={true}
      initialValues={group}
      onSubmit={(values, formik) => { console.log('SUBMITTING', values) }}
      validate={validate}
      render={form => (
        <GroupDetails
          addFriend={email => addFriend(email, form)}
          isOwner={group.owner === props.uid}
          onCancel={() => dispatch(push('/groups'))}
          onSettle={() => { props.settleGroup(props.id) }}
          onSubmit={() => form.submitForm()}
          owner={group.owner}
          removeFriend={email => removeFriend(email, form)}
          values={form.values}
        />
      )}
    />
  );


};

Group.propTypes = {
  ...groupQueryWrappedTypes,
  ...settleGroupQueryProps,
  ...withUidProps
};

export default compose(
  withRouter,

  withUid,

  withProps(props => ({
    id: props.match.params.id,
  })),

  groupQuery,

  settleGroupQuery,

  connect()
)(Group);
