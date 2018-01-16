import React, { Component } from 'react'

class CustomInput extends Component {
  render () {
    return (
      <div className='form-input flex-property div-wrap'>
        <input
          id={this.props.inputId}
          type={this.props.inputType}
          className='floated'
          required
          autoComplete='off'
          value={this.props.value}
          onChange={this.props.onChangeValue}
        />
        <label htmlFor="">
          {this.props.inputPlaceholder}
        </label>
      </div>
    )
  }
}
export default CustomInput
