import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import P from 'prop-types';

import { asyncLogout } from './actions/login';
import Routes from './routes/routes.js';
import LeftNav from './components/layout/leftNav';
import Loader from './components/Loader';
import './css/global.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page">
          {this.props.isLoading && <Loader />}

          {!this.props.isLoading && (
            <React.Fragment>
              <LeftNav
                isSignedIn={this.props.isSignedIn}
                username={this.props.username ? this.props.username.split('@')[0] : ''}
              />

              {!this.props.isSignedIn && (
                <Route path="/" exact>
                  <Redirect to="/login" push />
                </Route>
              )}

              <Routes logout={this.props.asyncLogout} />
            </React.Fragment>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  asyncLogout: P.func,
  isLoading: P.bool,
  isSignedIn: P.bool,
  username: P.string,
};

// TODO: username should equal username from the profile, not email
export default connect(
  s => ({
    isLoading: s.core.isLoading,
    isSignedIn: Boolean(s.firebase.auth.uid),
    username: s.firebase.auth.email,
  }),
  d => bindActionCreators({ asyncLogout }, d),
)(App);
