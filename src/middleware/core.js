import * as coreActions from '../actions/core';
import { setLoaded } from '../actions/core';

const coreMiddleware = ({ getState, dispatch }) => next => action => {

  // wait for react-redux-firebase to fetch profile
  if (
    action.type === '@@reactReduxFirebase/SET_PROFILE' ||
    action.type === '@@reactReduxFirebase/AUTH_EMPTY_CHANGE'
  ) {
    const result = next(action);
    dispatch(setLoaded());
    return result;
  }

  return next(action);
};

export default coreMiddleware;
