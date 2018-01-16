import React, { Component } from 'react';

class LeftNav extends Component{

  leftNavLinks = [
    {
      'name': 'Sign In',
      'id': '0',
      'url': '/signin'
    },
    {
      'name': 'Language',
      'id': '2',
      'url': '/random'
    },
    {
      'name': 'Example',
      'id': '3',
      'url': '/random'
    },
    {
      'name': 'Group',
      'id': '4',
      'url': '/random'
    },
    {
      'name': 'Log out',
      'id': '5',
      'url': '/random'
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
