import React, { Component } from 'react';

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
      <footer className="header-gray light-gray">
        {/* <ul className="single-line-list flex-property flex-center">
          {this.footerLinks.map(function(object, i){
            return(
              <li key={i}><a className="light-gray footer-links title-s" href={object.url}>{object.name}</a></li>
            )
          })}
        </ul> */}

        {/* <p className="title-s">
        </p> */}

      </footer>
    );
  }
}

export default Footer;
