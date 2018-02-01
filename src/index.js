import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { initFirebase } from './services/firebase';
import App from './App';
import createStore from './store';

initFirebase();
const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}><App history={history}/></Provider>,
  document.getElementById('root')
);
