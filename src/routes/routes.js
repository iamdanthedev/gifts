import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { userIsAuthenticated } from '../utils/userIsAuthenticated';

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

export default ({ isSignedIn, logout }) => (
  <div className="page-content">
    <Switch>

      <Route path="/login" component={Login}/>
      <Route path="/logout" render={() => {
        logout();
        return <Redirect to="/login" />;
      }} />
      <Route path="/register" component={Register}/>

      <Route path="/home" component={userIsAuthenticated(Profile)}/>
      <Route path="/friendsList" component={userIsAuthenticated(ContainerFriends)}/>
      <Route path="/groupsList" component={userIsAuthenticated(ContainerGroups)}/>
      <Route path="/createGroup" component={userIsAuthenticated(CreateGroup)}/>
      <Route path="/groupDetails" component={userIsAuthenticated(GroupDetails)}/>

      <Redirect to="/login" from="/" />
    </Switch>
  </div>
);
