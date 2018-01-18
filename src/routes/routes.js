import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

/* Import all page components here */

import SignIn from '../components/SignIn.js';
import Register from '../components/Register.js';
import FriendsList from '../components/FriendsList.js';
import GroupsList from '../components/GroupsList.js';
import GroupDetails from '../components/GroupDetails.js';
import CreateGroup from '../components/CreateGroup.js';


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
      <Route path="/friendsList" component={FriendsList}></Route>
      <Route path="/groupsList" component={GroupsList}></Route>
      <Route path="/groupDetails" component={GroupDetails}></Route>
      <Route path="/createGroup" component={CreateGroup}></Route>
    </div>
  </BrowserRouter>
);
