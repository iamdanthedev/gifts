import { setLoaded } from '../actions/core';
import { replace } from 'react-router-redux';

const coreMiddleware = ({ getState, dispatch }) => next => action => {

  /**
   * wait for react-redux-firebase to fetch user profile
   * and set loaded state when profile is ready
   */
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
