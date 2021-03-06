import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

/* Import all page components here */

import Login from '../containers/Login';
import Register from '../containers/Register';

import CreateGroup from '../components/groups/createGroup';

import Profile from '../components/profile';
import ContainerFriends from '../components/friends/containerFriends'
import ContainerGroups from '../components/groups/containerGroup'
import GroupDetails from '../components/groups/groupDetails'

/*
    All routes go here.
 */

export default () => (
  <BrowserRouter>
    <div className="page-content">
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>

      <Route path="/home" component={Profile}></Route>
      <Route path="/friendsList" component={ContainerFriends}></Route>
      <Route path="/groupsList" component={ContainerGroups}></Route>
      <Route path="/createGroup" component={CreateGroup}></Route>
      <Route path="/groupDetails" component={GroupDetails}></Route>
    </div>
  </BrowserRouter>
);
