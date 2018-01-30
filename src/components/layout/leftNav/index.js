import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoggedBubble from '../../loggedBubble';

import './style.css';

class LeftNav extends Component {

  leftNavLinks = [
    {
      name: 'Register',
      id: '8',
      url: '/register',
    },
    {
      name: 'My profile',
      id: '7',
      url: '/home',
    },
    {
      name: 'Friends',
      id: '3',
      url: '/friendsList',
    },
    {
      name: 'Groups',
      id: '4',
      url: '/groupsList',
    },
    {
      name: 'New group',
      id: '2',
      url: '/createGroup',
    },
    {
      name: 'Balances',
      id: '6',
      url: '/myBalances',
    },
  ];

  loginLinks = [
    // {
    //   'name': 'Log out',
    //   'id': '5',
    //   'url': '/logout'
    // },
    {
      name: 'Sign In',
      id: '0',
      url: '/login',
    },
  ];

  render() {
    return (
      <div className="flex-property left-navigation">
        <ul>
          <LoggedBubble />

          {this.leftNavLinks.map(function(object, i) {
            return (
              <li key={i} className="flex-property flex-center">
                <Link className="title-xs" to={object.url}>
                  {object.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul>
          {this.loginLinks.map(function(object, i) {
            return (
              <li key={i} className="flex-property flex-center">
                <Link className="title-xs" to={object.url}>
                  {object.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LeftNav;
