import { createStore, compose, applyMiddleware } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import logger from 'redux-logger';
import * as firebase from 'firebase';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import coreMiddleware from '../middleware/core';

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: true, // enable/disable Firebase's database logging
};

// Add redux Firebase to compose
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, config))(
  createStore,
);

export default history => {
  const middleware = [routerMiddleware(history), coreMiddleware, logger, thunk];

  return createStoreWithFirebase(
    rootReducer,
    {},
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
};
