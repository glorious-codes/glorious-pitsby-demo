import '@styles/button.styl';
import React from 'react';

export const Button = ({ type = 'button', theme, onClick, children }) => {
  return (
    <button
      className={ buildCssClasses(theme) }
      onClick={ onClick }
      type={ type }>
      { children }
    </button>
  );
};

function buildCssClasses(theme){
  const baseCssClass = 'button';
  const cssClasses = [baseCssClass];
  if(isThemeValid(theme))
    cssClasses.push(`${baseCssClass}-${theme}`);
  return cssClasses.join(' ');
}

function isThemeValid(theme){
  return ['primary'].includes(theme);
}
