import '@styles/alert.styl';
import React from 'react';

export const Alert = ({ theme, triggerText, onTriggerClick, children }) => {
  return (
    <div className={ buildClassName({ theme, onTriggerClick }) }>
      { children }
      { buildTrigger(triggerText, onTriggerClick) }
    </div>
  );
};

function buildClassName({ theme, onTriggerClick }){
  const baseCssClass = getBaseCssClass();
  const themeCssClass = prependBaseCssClass(buildThemeCssClass(theme));
  const triggerCssClass = prependBaseCssClass(buildTriggerCssClass(onTriggerClick));
  return `${ baseCssClass } ${ themeCssClass } ${ triggerCssClass }`.trim();
}

function getBaseCssClass(){
  return 'alert';
}

function prependBaseCssClass(cssClass){
  return cssClass ? [getBaseCssClass(), cssClass].join('-') : '';
}

function buildThemeCssClass(theme){
  return isThemeValid(theme) ? theme : '';
}

function isThemeValid(theme){
  return ['success', 'danger'].includes(theme);
}

function buildTriggerCssClass(onTriggerClick){
  return onTriggerClick ? 'has-trigger' : '';
}

function buildTrigger(triggerText = 'Retry', onTriggerClick){
  return onTriggerClick ?
    <button type="button" className="alert-trigger" onClick={ onTriggerClick }>
      { triggerText }
    </button> :
    null;
}
