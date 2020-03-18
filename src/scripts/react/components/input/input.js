import '@styles/input.styl';
import React from 'react';

export const Input = ({ type = 'text', name, value, disabled, required, onChange }) => {
  return (
    <input
      name={name}
      className="pd-input"
      type={ type }
      value={ value }
      disabled={ disabled }
      required={ required }
      onChange={ evt => onInputChange(evt, onChange) } />
  );
};

function onInputChange({ target }, onChange){
  const { name, value } = target;
  return onChange({ name, value });
}
