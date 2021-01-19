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
      onChange={ onChange } />
  );
};
