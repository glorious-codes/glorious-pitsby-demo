import React from 'react';

export const Field = ({ label, children }) => {
  return (
    <div className="pd-field">
      <label>
        { label }
        { handleAsterisk(children) }
      </label>
      { children }
    </div>
  );
};

function handleAsterisk(children){
  if(children && children.props.required)
    return <span className="pd-field-asterisk" data-field-asterisk>*</span>;
}
