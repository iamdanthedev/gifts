import { connect } from 'react-redux';
import { compose, setPropTypes } from 'recompose';
import P from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';

export default compose(
  setPropTypes({
    id: P.string.isRequired,
  }),

  firebaseConnect(props => {
    return [`groups/${props.id}`];
  }),

  connect(({ firebase }, props) => ({
    group: getVal(firebase.data, `groups/${props.id}`)
  })),
);

export const groupQueryPropTypes = {
  group: P.object()
};
