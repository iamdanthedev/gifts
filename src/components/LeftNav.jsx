import React, { Component } from 'react';

class LeftNav extends Component{

  leftNavLinks = [
    {
      'name': 'Sign In',
      'id': '0',
      'url': '/signin'
    },
    {
      'name': 'Register',
      'id': '8',
      'url': '/register'
    },
    {
      'name': 'My profile',
      'id': '7',
      'url': '/home'
    },
    {
      'name': 'Friends',
      'id': '3',
      'url': '/friendsList'
    },
    {
      'name': 'Groups',
      'id': '4',
      'url': '/groupsList'
    },
    {
      'name': 'New group',
      'id': '2',
      'url': '/createGroup'
    },
    {
      'name': 'Balances',
      'id': '6',
      'url': '/myBalances'
    },
    {
      'name': 'Log out',
      'id': '5',
      'url': '/logout'
    }
  ];

  render(){
    return(
      <div className="flex-property left-navigation">
          <ul>
            {this.leftNavLinks.map(function(object, i){
              return(
                <li key={i} className="flex-property flex-center">
                  <a className="title-xs" href={object.url}>{object.name}</a>
                </li>
              )
            })}
          </ul>
      </div>
    );
  }
}

export default LeftNav;
