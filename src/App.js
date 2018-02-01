import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import P from 'prop-types';

import { asyncLogout } from './actions/login';
import Routes from './routes/routes.js';
import LeftNav from './components/layout/leftNav';
import Loader from './components/Loader';
import './css/global.css';
import { withRouter } from 'react-router';

class App extends Component {
  render() {

    return (
      <ConnectedRouter history={this.props.history}>
        <Route>
          <div className="page">
            {this.props.isLoading && <Loader />}

            {!this.props.isLoading && (
              <React.Fragment>
                <LeftNav
                  isSignedIn={this.props.isSignedIn}
                  username={this.props.username ? this.props.username.split('@')[0] : ''}
                />

                <Routes
                  isSignedIn={this.props.isSignedIn}
                  logout={this.props.asyncLogout}
                />
              </React.Fragment>
            )}
          </div>
        </Route>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  asyncLogout: P.func,
  isLoading: P.bool,
  isSignedIn: P.bool,
  username: P.string,
  history: P.object.isRequired,
};

// TODO: username should equal username from the profile, not email
export default compose(
  connect(
    s => ({
      isLoading: s.core.isLoading,
      isSignedIn: Boolean(s.firebase.auth.uid),
      username: s.firebase.auth.email,
    }),
    d => bindActionCreators({ asyncLogout }, d),
  ),
)(App);
