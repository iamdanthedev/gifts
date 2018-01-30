import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import P from 'prop-types';
import Routes from './routes/routes.js'
import LeftNav from './components/layout/leftNav';
import Loader from './components/Loader';
import './css/global.css';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="page">

          {this.props.isLoading && (
            <Loader />
          )}

          {!this.props.isLoading && (
            <React.Fragment>
              <LeftNav username={this.props.username.split('@')[0]} />
              <Routes />
            </React.Fragment>
          )}

        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isLoading: P.bool,
  username: P.string,
};

// TODO: username should equal username from the profile, not email
export default connect(s => ({
  isLoading: s.core.isLoading,
  username: s.firebase.auth.email
}))(App);
