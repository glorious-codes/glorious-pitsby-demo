import React from 'react';

export const Field = ({ label, children }) => {
  return (
    <div className={ buildCssClasses(children) }>
      <label>
        { label }
      </label>
      { children }
    </div>
  );
};

function buildCssClasses(children){
  const cssClasses = ['pd-field'];
  if(children && children.props.required)
    cssClasses.push('pd-field-required');
  return cssClasses.join(' ');
}
