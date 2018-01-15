import React, { Component } from 'react'

class CustomTextarea extends Component {
  render () {
    return (
      <div className='textarea-element'>
        <textarea
          id={this.props.inputId}
          type={this.props.inputType}
          className='floated-textarea textarea-custom padding-20 thin-title title-m'
          required
          rows="5" cols="70"
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
export default CustomTextarea
