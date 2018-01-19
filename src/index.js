import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers'

import {composeWithDevTools} from 'redux-devtools-extension';

let state = [
   "users": {
			"username": "senka",
			"email": "chris@test.net",
			"pass": "lala"
		}, {
			"username": "nejra",
			"email": "test@quiver.ba",
			"pass": "lala"
		}, {
			"username": "reha",
			"email": "gmail@mail.io",
			"pass": "lala"
		}, {
			"username": "vato",
			"email": "email@gmail.co",
			"pass": "lala"
		}
];

let store = createStore(reducer, composeWithDevTools());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
