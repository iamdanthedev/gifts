import * as coreActions from '../actions/core';
import { setLoaded } from '../actions/core';

const coreMiddleware = ({ getState, dispatch }) => next => action => {


  // wait for react-redux-firebase to fetch profile
  if (action.type === '@@reactReduxFirebase/SET_PROFILE') {
    const result = next(action);
    dispatch(setLoaded());
    return result;
  }


};

export default coreMiddleware;
