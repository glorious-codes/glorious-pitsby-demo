import React from 'react';

export const Textarea = ({ name, value, disabled, required, onChange }) => {
  return (
    <textarea
      name={ name }
      value={ value }
      className="pd-textarea"
      disabled={ disabled }
      required={ required }
      onChange={ evt => onTextareaChange(evt, onChange) } />
  );
};

function onTextareaChange({ target }, onChange){
  const { value, name } = target;
  return onChange({ name, value });
}
