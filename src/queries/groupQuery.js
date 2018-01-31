import { connect } from 'react-redux';
import { compose, setPropTypes } from 'recompose';
import P from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';

/**
 * Queries a single groups
 * expects props.id
 * passes props.group down
 */
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

export const groupQueryWrappedTypes = {
  group: P.object()
};
