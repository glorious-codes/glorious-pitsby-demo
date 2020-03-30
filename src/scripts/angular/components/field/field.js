import template from './field.html';

function controller($element, $timeout){
  const $ctrl = this;

  $ctrl.$onInit = () => {
    $timeout(() => setCssClasses(buildCssClasses()));
  };

  function buildCssClasses(){
    const cssClasses = ['pd-field'];
    if(containsRequiredChild())
      cssClasses.push('pd-field-required');
    return cssClasses.join(' ');
  }

  function containsRequiredChild(){
    return  $element[0].querySelector('[data-required="true"]');
  }

  function setCssClasses(cssClasses){
    $ctrl.cssClasses = cssClasses;
  }
}

controller.$inject = ['$element', '$timeout'];

export default {
  transclude: true,
  bindings: {
    label: '@'
  },
  controller,
  template
};
