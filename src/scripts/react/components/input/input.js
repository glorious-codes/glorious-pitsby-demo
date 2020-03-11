import '@styles/input.styl';
import React from 'react';

export const Input = ({ type = 'text', value, disabled, required, onChange }) => {
  return (
    <input
      className="input"
      type={ type }
      value={ value }
      disabled={ disabled }
      required={ required }
      onChange={ (evt) => onInputChange(evt, onChange) } />
  );
};

function onInputChange({ target }, onChange){
  const { value } = target;
  return onChange(value);
}
