import React, { Component } from 'react';
import './style.css';

const CustomInput = ({ placeholder, ...inputProps}) => (
  <div className='form-input flex-property div-wrap'>
    <input
      {...inputProps}
      className='floated'
    />
    <label htmlFor={inputProps.name}> {placeholder} </label>
  </div>
)

export default CustomInput
