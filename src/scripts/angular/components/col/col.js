import template from './col.html';

function controller(){
  const $ctrl = this;

  $ctrl.$onInit = () => {
    setCssClasses(buildCssClasses($ctrl.size, $ctrl.offset));
  };

  function buildCssClasses(size, offset){
    const cssClasses = ['pd-col'];
    if(isSizeValid(size))
      cssClasses.push(`pd-col-${size}`);
    if(isOffsetValid(offset))
      cssClasses.push(`pd-col-offset-${offset}`);
    return cssClasses.join(' ');
  }

  function isSizeValid(value){
    const size = parseInt(value);
    return size >= 1 && size <= 12;
  }

  function isOffsetValid(value){
    const offset = parseInt(value);
    return offset >= 1 && offset <= 11;
  }

  function setCssClasses(cssClasses){
    $ctrl.cssClasses = cssClasses;
  }
}

export default {
  transclude: true,
  bindings: {
    size: '@',
    offset: '@'
  },
  controller,
  template
};
