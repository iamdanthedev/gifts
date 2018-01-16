import React, { Component } from 'react';
import AccessForms from './AccessForms.jsx'

class SignIn extends Component{
  render(){
    return(
      <div className="connect-wrap flex-property flex-center">
        <AccessForms formTitle="Welcome back!" isRegister={false}/>
      </div>
    )
  }
}
export default SignIn;
