import React, { Component } from 'react';
import Routes from './routes/routes.js'
import LeftNav from './components/layout/leftNav';
import './css/global.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <LeftNav />
        <Routes />
      </div>
    );
  }
}
export default App;
