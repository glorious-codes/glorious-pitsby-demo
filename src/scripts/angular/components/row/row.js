import template from './row.html';

function controller(){
  const $ctrl = this;

  $ctrl.$onInit = () => {
    setCssClasses(buildCssClasses($ctrl.offset));
  };

  function buildCssClasses(offset){
    const cssClasses = ['pd-row'];
    if(isOffsetValid(offset))
      cssClasses.push(`pd-row-offset-${offset}`);
    return cssClasses.join(' ');
  }

  function isOffsetValid(value){
    const offset = parseInt(value);
    return offset >= 1 && offset <= 10;
  }

  function setCssClasses(cssClasses){
    $ctrl.cssClasses = cssClasses;
  }
}

export default {
  transclude: true,
  bindings: {
    offset: '@'
  },
  controller,
  template
};
