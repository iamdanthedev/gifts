import React from 'react';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { initialValues, validate } from './formUtils';
import createGroupQuery from '../../queries/createGroupQuery';
import addFriendsQuery, { addFriendsQueryProps } from '../../queries/addFriendsQuery';
import CreateGroupForm from '../../components/groups/createGroup';

const CreateGroup = props => {

  const { dispatch } = props;

  return <CreateGroupForm
    friends={friendsList}
    initialValues={initialValues}
    validate={validate}
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
  addFriendsQuery,
  createGroupQuery
)(CreateGroup);

const friendsList = [
  {
    status: 'own',
    email: 'senka@gmail.com',
    name: 'Senka Ib.',
  },
  {
    status: 'owned',
    email: 'harun@gmail.com',
    name: 'Harun Sm.',
  },
  {
    status: 'clear',
    email: 'tarik@gmail.com',
    name: 'Tarik Dm.',
  },
  {
    status: 'own',
    email: 'nejra@gmail.com',
    name: 'Nejra Pa.',
  },
  {
    status: 'owned',
    email: 'haris@gmail.com',
    name: 'Haris Mu.',
  },
  {
    status: 'clear',
    email: 'mirza@gmail.com',
    name: 'Mirza Sm.',
  },
  {
    status: 'own',
    email: 'irma@gmail.com',
    name: 'Irma Ja.',
  },
];