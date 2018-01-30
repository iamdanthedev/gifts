import {createStore, compose, applyMiddleware} from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import logger from 'redux-logger'
import * as firebase from 'firebase'
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: true, // enable/disable Firebase's database logging
}
// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config)
)(createStore)

let middlewares = [logger, thunk]

let store = createStoreWithFirebase(
  rootReducer,
  {},
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default store;
