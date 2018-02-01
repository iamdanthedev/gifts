import React from 'react';
import { compose } from 'redux';
import { withState } from 'recompose';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { initialValues, validate } from './formUtils';
import createGroupQuery from '../../queries/createGroupQuery';
import addFriendsQuery, { addFriendsQueryProps } from '../../queries/addFriendsQuery';
import CreateGroupForm from '../../components/groups/createGroup';

const CreateGroup = props => {

  const { dispatch } = props;

  return <CreateGroupForm
    initialValues={initialValues}
    validate={validate}
    showAllUsers={props.showAllUsers}
    setShowAllUsers={props.setShowAllUsers}
    onSubmit={async (values, { setSubmitting, setErrors, formProps }) => {
      try {
        await props.createGroup(values);
        await props.addFriends(values.friends);
        dispatch(push('/groups', { message: `Group "${values.name}" created`}));
      }
      catch (e) {
        console.log('error', e);
        // TODO: handle errors
        // setErrors();
      }
    }}
  />;
};

CreateGroup.propTypes = {
  ...addFriendsQueryProps
};

export default compose(
  connect(),
  withState('showAllUsers', 'setShowAllUsers', false),
  addFriendsQuery,
  createGroupQuery
)(CreateGroup);

