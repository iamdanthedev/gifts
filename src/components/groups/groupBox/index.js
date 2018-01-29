import React, { Component } from 'react';
import './style.css';

class groupBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      amountValue: props.amountValue,
    };
    // this.openGroupDetails = this.openGroupDetails.bind(this);
  }
  render(){
    return(
      <a href="/groupDetails" className="one-group white-box flex-property flex-center">
        <div className={"group-status group-color-" + this.props.status}>
          <p className="group-members flex-property flex-center">13</p>
        </div>
        <div className="group-info flex-property div-wrap">
          <span>13Dec</span>
          <div className="group-name">Reha rodjendan</div>
          <p className="group-my-status">You owe {this.props.amountValue}</p>
        </div>
      </a>
    )
  }
}
export default groupBox;
