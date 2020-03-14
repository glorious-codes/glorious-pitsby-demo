import '@styles/tag.styl';
import React from 'react';

export const Tag = ({ children, theme }) => {
  return (
    <div className={buildCssClasses(theme)}>
      { children }
    </div>
  );
};

function buildCssClasses(theme){
  const baseCssClass = 'pd-tag';
  const cssClasses = [baseCssClass];
  if(isThemeValid(theme))
    cssClasses.push(`${baseCssClass}-${theme}`);
  return cssClasses.join(' ');
}

function isThemeValid(theme){
  return ['danger', 'success', 'warning'].includes(theme);
}
