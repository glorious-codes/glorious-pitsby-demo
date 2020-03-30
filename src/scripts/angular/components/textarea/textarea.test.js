describe('Textarea', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile) => {
      const scope = $rootScope.$new(true);
      compile = (bindings = {}) => {
        const template = `<pd-textarea
                            data-name="{{ $ctrl.name }}"
                            data-value="$ctrl.value"
                            data-required="$ctrl.required"
                            data-disabled="$ctrl.disabled"
                            on-change="$ctrl.onChange" />`;
        scope.$ctrl = bindings;
        const element = $compile(template)(scope);
        scope.$digest();
        return element;
      };
    });
  });

  it('should have appropriate css class', () => {
    const element = compile();
    expect(element.find('textarea').attr('class').includes('pd-textarea')).toEqual(true);
  });

  it('should have no value by default', () => {
    const element = compile();
    expect(element.find('textarea').val()).toEqual('');
  });

  it('should optionally set an initial value', () => {
    const value = 'Rafael';
    const element = compile({ value });
    expect(element.find('textarea').val()).toEqual(value);
  });

  it('should not be required by default', () => {
    const element = compile();
    expect(element.find('textarea').attr('required')).toBeFalsy();
  });

  it('should optionally be required', () => {
    const element = compile({ required: true });
    expect(element.find('textarea').attr('required')).toBeTruthy();
  });

  it('should be enabled by default', () => {
    const element = compile();
    expect(element.find('textarea').attr('disabled')).toBeFalsy();
  });

  it('should optionally be disabled', () => {
    const element = compile({ disabled: true });
    expect(element.find('textarea').attr('disabled')).toBeTruthy();
  });

  it('should execute change callback on change passing textarea\'s name and value', () => {
    const name = 'message';
    const value = 'Hello!';
    const onChange = jest.fn();
    const element = compile({ name, onChange });
    const textarea = element.find('textarea');
    textarea.val(value);
    textarea.triggerHandler('change');
    expect(onChange).toHaveBeenCalledWith({ name, value });
  });
});
