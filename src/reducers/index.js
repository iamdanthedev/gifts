import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { firebaseReducer } from 'react-redux-firebase';
//import thunk
import registerUser from './users.js';
import coreReducer from './core';

const EventsApp = combineReducers({
  core: coreReducer,
  registerUser,
  firebase: firebaseReducer,
  router: routerReducer
});

export default EventsApp
