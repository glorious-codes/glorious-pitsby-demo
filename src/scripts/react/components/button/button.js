import React from 'react';

export const Button = ({ type = 'button', block, theme, disabled, onClick, children }) => {
  return (
    <button
      className={ buildCssClasses(theme, block) }
      onClick={ onClick }
      type={ type }
      disabled={ disabled }>
      { children }
    </button>
  );
};

function buildCssClasses(theme, block){
  const cssClasses = [getBaseCssClass()];
  handleThemeCssClass(cssClasses, theme);
  handleBlockCssClass(cssClasses, block);
  return cssClasses.join(' ');
}

function handleThemeCssClass(cssClasses, theme){
  if(isThemeValid(theme))
    cssClasses.push(`${getBaseCssClass()}-${theme}`);
  return cssClasses;
}

function handleBlockCssClass(cssClasses, block){
  if(block)
    cssClasses.push(`${getBaseCssClass()}-block`);
  return cssClasses;
}

function isThemeValid(theme){
  return ['primary'].includes(theme);
}

function getBaseCssClass(){
  return 'pd-button';
}
