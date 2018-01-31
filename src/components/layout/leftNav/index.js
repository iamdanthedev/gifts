import React, { Component } from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import LoggedBubble from '../../loggedBubble';

import './style.css';

const leftNavLinks = [
  {
    name: 'Register',
    id: '8',
    url: '/register',
    hideOnSignIn: true
  },
  {
    name: 'My profile',
    id: '7',
    url: '/home',
    protected: true,
  },
  {
    name: 'Friends',
    id: '3',
    url: '/friendsList',
    protected: true,
  },
  {
    name: 'Groups',
    id: '4',
    url: '/groups',
    protected: true,
  },
  {
    name: 'New group',
    id: '2',
    url: '/group/new',
    protected: true,
  },
  {
    name: 'Balances',
    id: '6',
    url: '/myBalances',
    protected: true,
  },
];

const allLoginLinks = [
  {
    name: 'Sign out',
    id: '5',
    url: '/logout',
    protected: true,
  },
  {
    name: 'Sign In',
    id: '0',
    url: '/login',
    hideOnSignIn: true
  },
];

const filterLinks = (links, signedIn) => signedIn
  ? links.filter(l => !l.hideOnSignIn)
  : links.filter(l => !l.protected);

const NavLink = ({ name, url }) => (
  <li className="flex-property flex-center">
    <Link className="title-xs" to={url}>
      {name}
    </Link>
  </li>
);

class LeftNav extends Component {

  render() {

    const navLinks = filterLinks(leftNavLinks, this.props.isSignedIn);
    const loginLinks = filterLinks(allLoginLinks, this.props.isSignedIn);

    return (
      <div className="flex-property left-navigation">
        <ul>
          <LoggedBubble username={this.props.username} />
          {navLinks.map((object, i) => <NavLink key={i} {...object} />)}
        </ul>

        <ul>
          {loginLinks.map((object, i) => <NavLink key={i} {...object} />)}
        </ul>
      </div>
    );
  }
}

LeftNav.propTypes = {
  isSignedIn: P.bool,
  username: P.string,
};

export default LeftNav;
