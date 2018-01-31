import { setLoaded } from '../actions/core';
import { replace } from 'react-router-redux';

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

  else if (action.type === '') {
    const result = next(action);
    dispatch(replace('/profile'));
    return result;
  }

  return next(action);
};

export default coreMiddleware;
