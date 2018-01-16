import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

/* Import all page components here */

import SignIn from '../components/SignIn.js';
import Register from '../components/Register.js';
import Home from '../components/Home.jsx';
// import Register from '../components/register.js';


/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

export default () => (
  <BrowserRouter>
    <div className="page-content">
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/home" component={Home}></Route>
    </div>
  </BrowserRouter>
);
