import React, { Component } from 'react';
import { connect } from 'react-redux';
import P from 'prop-types';
import Routes from './routes/routes.js'
import LeftNav from './components/layout/leftNav';
import Loader from './components/Loader';
import './css/global.css';

class App extends Component {
  render() {

    return (
      <div className="page">

        {this.props.isLoading && (
          <Loader />
        )}

        {!this.props.isLoading && (
          <React.Fragment>
            <LeftNav />
            <Routes />
          </React.Fragment>
        )}

      </div>
    );
  }
}

App.propTypes = {
  isLoading: P.bool
};

export default connect(s => ({
  isLoading: s.core.isLoading
}))(App);
