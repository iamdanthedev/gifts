import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { firebaseReducer } from 'react-redux-firebase'
//import thunk
import registerUser from './users.js'

const EventsApp = combineReducers({
  registerUser,
  firebase: firebaseReducer,
  routing: routerReducer
})

export default EventsApp
