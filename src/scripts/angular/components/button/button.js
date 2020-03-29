import template from './button.html';

function controller(){
  const $ctrl = this;

  $ctrl.$onInit = () => {
    setButtonType(buildButtonType($ctrl.type));
    setCssClasses(buildCssClasses($ctrl.theme, $ctrl.block));
  };

  $ctrl.onButtonClick = () => {
    return $ctrl.onClick && $ctrl.onClick();
  };

  function buildButtonType(type){
    return ['submit', 'reset'].includes(type) ? type : 'button';
  }

  function setButtonType(buttonType){
    $ctrl.buttonType = buttonType;
  }

  function buildCssClasses(theme, block){
    const classes = ['pd-button'];
    if(isThemeValid(theme))
      classes.push(`pd-button-${theme}`);
    if(block)
      classes.push('pd-button-block');
    return classes.join(' ');
  }

  function isThemeValid(theme){
    return ['primary'].includes(theme);
  }

  function setCssClasses(cssClasses){
    $ctrl.cssClasses = cssClasses;
  }
}

export default {
  transclude: true,
  bindings: {
    theme: '@',
    type: '@',
    block: '<',
    disabled: '<',
    onClick: '='
  },
  controller,
  template
};
