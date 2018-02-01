import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { userIsAuthenticated } from '../utils/userIsAuthenticated';

/* Import all page components here */

import LoginForm from '../containers/Login';
import Register from '../containers/Register';
import CreateGroup from '../containers/groups/CreateGroup';
import Group from '../containers/groups/Group';
import Groups from '../containers/groups/Groups';
import Profile from '../containers/Profile';

/*
    All routes go here.
 */

const Friends = () => <Groups hideGroups showFriends/>

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
        <Route path="/friends" component={userIsAuthenticated(Friends)} />
        <Route path="/groups" component={userIsAuthenticated(Groups)} />
        <Route path="/group/new" component={userIsAuthenticated(CreateGroup)} />
        <Route path="/group/:id" component={userIsAuthenticated(Group)} />

        <Redirect to="/login" from="/" />
      </Switch>
    </PageLayout>
  </div>
);
