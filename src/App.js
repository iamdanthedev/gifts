import React, { Component } from 'react';
import './App.css';
import './css/styles.css';
import './css/medias.css';
import './css/index.css';

import LeftNav from './components/LeftNav.jsx';

import Footer from './components/Footer.js';
import MessageBox from './components/messageBox.js';
import Routes from './routes/routes.js'

class App extends Component {

  componentWillMount() {
   console.log("This will mount");
 }

 componentDidMount() {
   console.log("This did mount");
 }

 componentWillUnmount() {
   console.log("This will unmount");
 }

  render() {
    return (
      <div className="page">
        <LeftNav />
        {/* three message types - error, warning, success - important to use these three */}
          {/*<MessageBox messageType="error"/>*/}
          {/* <Routes /> */}
      </div>
    );
  }
}

export default App;
