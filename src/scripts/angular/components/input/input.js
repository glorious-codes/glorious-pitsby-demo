import template from './input.html';

function controller($element){
  const $ctrl = this;

  $ctrl.$onInit = () => {
    setInputType(buildInputType($ctrl.type));
    handleInputBooleanAttribute('required', $ctrl.required);
    handleInputBooleanAttribute('disabled', $ctrl.disabled);
  };

  $ctrl.onInputChange = () => {
    const { name, value } = $element.find('input')[0];
    return $ctrl.onChange && $ctrl.onChange({ name, value });
  };

  function buildInputType(type){
    return isTypeValid(type) ? type : 'text';
  }

  function isTypeValid(type){
    return [
      'color',
      'date',
      'datetime-local',
      'email',
      'file',
      'hidden',
      'image',
      'month',
      'number',
      'password',
      'range',
      'search',
      'tel',
      'time',
      'url',
      'week'
    ].includes(type);
  }

  function handleInputBooleanAttribute(attrName, attrValue){
    if(attrValue)
      $element.find('input').attr(attrName, attrValue);
  }

  function setInputType(inputType){
    $ctrl.inputType = inputType;
  }
}

controller.$inject = ['$element'];

export default {
  bindings: {
    name: '@',
    type: '@',
    value: '=',
    required: '<',
    disabled: '<',
    onChange: '='
  },
  controller,
  template
};
