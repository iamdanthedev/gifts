import React, { Component } from 'react';
import './App.css';
import './css/colorsFonts.css';
import './css/common.css';
import './css/medias.css';
import './css/index.css';

import Header from './components/header.js';
import Footer from './components/footer.js';
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
        <Header />
        {/* three message types - error, warning, success - important to use these three */}
          {/*<MessageBox messageType="error"/>*/}
          <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
