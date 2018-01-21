import React, { Component } from 'react';
import './style.css';

class Footer extends Component{
  footerLinks = [
    {
      'name': 'Link',
      'id': '0',
      'url': '/random'
    },
    {
      'name': 'Language',
      'id': '2',
      'url': '/random'
    }
  ];

  render(){
    return(
      <footer className="flex-property flex-center">


      </footer>
    );
  }
}

export default Footer;
