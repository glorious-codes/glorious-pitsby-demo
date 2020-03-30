import template from './textarea.html';

function controller($element){
  const $ctrl = this;

  $ctrl.$onInit = () => {
    handleInputBooleanAttribute('required', $ctrl.required);
    handleInputBooleanAttribute('disabled', $ctrl.disabled);
  };

  $ctrl.onTextareaChange = () => {
    const { name, value } = $element.find('textarea')[0];
    return $ctrl.onChange && $ctrl.onChange({ name, value });
  };

  function handleInputBooleanAttribute(attrName, attrValue){
    if(attrValue)
      $element.find('textarea').attr(attrName, attrValue);
  }
}

controller.$inject = ['$element'];

export default {
  bindings: {
    name: '@',
    value: '=',
    required: '<',
    disabled: '<',
    onChange: '='
  },
  controller,
  template
};
