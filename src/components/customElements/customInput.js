import React, { Component } from 'react'

class CustomInput extends Component {
  render () {
    return (
      <div className='form-element'>
        <input
          id={this.props.inputId}
          type={this.props.inputType}
          className='floated'
          required
          autoComplete='off'
          required
          value={this.props.value}
        />
        <label htmlFor={this.props.InputId}>
          {this.props.inputPlaceholder}
        </label>
        <div className='input-error-box'>
          Incorrect format!
        </div>
      </div>
    )
  }
}
export default CustomInput
