import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { userIsAuthenticated } from '../utils/userIsAuthenticated';

/* Import all page components here */

import LoginForm from '../containers/Login';
import Register from '../containers/Register';
import CreateGroup from '../containers/create_group/CreateGroup';
import Groups from '../containers/Groups';
import Profile from '../containers/Profile';

import ContainerFriends from '../components/friends/containerFriends';
import GroupDetails from '../components/groups/groupDetails';

/*
    All routes go here.
 */

export default ({ isSignedIn, logout }) => (
  <div className="page-content">
    <PageLayout>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route
          path="/logout"
          render={() => {
            logout();
            return <Redirect to="/login" />;
          }}
        />
        <Route path="/register" component={Register} />

        <Route path="/home" component={userIsAuthenticated(Profile)} />
        <Route path="/friendsList" component={userIsAuthenticated(ContainerFriends)} />
        <Route path="/groupsList" component={userIsAuthenticated(Groups)} />
        <Route path="/createGroup" component={userIsAuthenticated(CreateGroup)} />
        <Route path="/groupDetails" component={userIsAuthenticated(GroupDetails)} />

        <Redirect to="/login" from="/" />
      </Switch>
    </PageLayout>
  </div>
);
