import React from 'react';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { initialValues, validate } from './formUtils';
import createGroupQuery from '../../queries/createGroupQuery';
import CreateGroupForm from '../../components/groups/createGroup';
import { connect } from 'react-redux';

const CreateGroup = props => {

  const { dispatch } = props;

  return <CreateGroupForm
    friends={friendsList}
    initialValues={initialValues}
    validate={validate}
    onSubmit={(values, { setSubmitting, setErrors, formProps }) => {
      props.createGroup(values)
        .then(() => {
          setSubmitting(false);
          dispatch(push('/home'));
        })
        .catch(e => setErrors());
    }}
  />;
};

export default compose(
  connect(),
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
