import React, { Component } from 'react';
import AccessForms from './AccessForms.jsx'

class Register extends Component{
  render(){
    return(
      <div className="connect-wrap flex-property flex-center">
        <AccessForms formTitle="Register in few clicks" isRegister={true}/>
      </div>
    )
  }
}
export default Register;
