import React from 'react';
import P from 'prop-types';

const ButtonSwitch = props => (
  <div className="btn-group" data-toggle="buttons">

    {props.options.map((opt, i) => (
      <label key={i} className="btn btn-primary active">
        <input
          type="radio"
          id={opt}
          checked={props.value === i}
          onClick={() => props.onChange(i)}/> {opt}
      </label>
    ))}

  </div>
);

ButtonSwitch.propTypes = {
  options: P.arrayOf(P.string),
  value: P.number
};

export default ButtonSwitch;
