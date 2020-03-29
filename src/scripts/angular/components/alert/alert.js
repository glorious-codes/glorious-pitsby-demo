import template from './alert.html';

function controller(){
  const $ctrl = this;

  $ctrl.$onInit = () => {
    setCssClasses(buildCssClasses($ctrl.theme, $ctrl.onTriggerClick));
    setTriggerButtonText(buildTriggerButtonText($ctrl.triggerText));
  };

  function buildCssClasses(theme, onTriggerClick){
    const cssClasses = ['pd-alert'];
    if(onTriggerClick)
      cssClasses.push('pd-alert-has-trigger');
    if(isThemeValid(theme))
      cssClasses.push(`pd-alert-${theme}`);
    return cssClasses.join(' ');
  }

  function isThemeValid(theme){
    return ['success', 'danger'].includes(theme);
  }

  function setCssClasses(cssClasses){
    $ctrl.cssClasses = cssClasses;
  }

  function buildTriggerButtonText(triggerText){
    return triggerText || 'Retry';
  }

  function setTriggerButtonText(triggerText){
    $ctrl.triggerButtonText = triggerText;
  }
}

export default {
  transclude: true,
  bindings: {
    theme: '@',
    triggerText: '@',
    onTriggerClick: '='
  },
  controller,
  template
};
