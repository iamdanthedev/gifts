import React, { Component } from 'react';

class OneGroup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      amountValue: props.amountValue,
    };
  }
  render(){
    return(
      <div className="one-group white-box flex-property flex-center">
        <div className={"group-status group-color-" + this.props.status}>
          <p className="group-members flex-property flex-center">13</p>
        </div>
        <div className="group-info flex-property div-wrap">
          <a className="group-name">Reha rodjendan</a>
          <p className="group-my-status">You <span>own</span> {this.props.amountValue}</p>
        </div>
      </div>
    )
  }
}
export default OneGroup;
