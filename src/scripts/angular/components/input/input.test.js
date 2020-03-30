describe('Input', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile) => {
      const scope = $rootScope.$new(true);
      compile = (bindings = {}) => {
        const template = `<pd-input
                            data-name="{{ $ctrl.name }}"
                            data-type="{{ $ctrl.type }}"
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
    expect(element.find('input').attr('class').includes('pd-input')).toEqual(true);
  });

  it('should set type as text by default', () => {
    const element = compile();
    expect(element.find('input').attr('type')).toEqual('text');
  });

  it('should optionally set a custom type', () => {
    const type = 'email';
    const element = compile({ type });
    expect(element.find('input').attr('type')).toEqual('email');
  });

  it('should have no value by default', () => {
    const element = compile();
    expect(element.find('input').val()).toEqual('');
  });

  it('should optionally set an initial value', () => {
    const value = 'Rafael';
    const element = compile({ value });
    expect(element.find('input').val()).toEqual(value);
  });

  it('should not be required by default', () => {
    const element = compile();
    expect(element.find('input').attr('required')).toBeFalsy();
  });

  it('should optionally be required', () => {
    const element = compile({ required: true });
    expect(element.find('input').attr('required')).toBeTruthy();
  });

  it('should be enabled by default', () => {
    const element = compile();
    expect(element.find('input').attr('disabled')).toBeFalsy();
  });

  it('should optionally be disabled', () => {
    const element = compile({ disabled: true });
    expect(element.find('input').attr('disabled')).toBeTruthy();
  });

  it('should execute change callback on change passing input\'s name and value', () => {
    const name = 'email';
    const value = 'some@email.com';
    const onChange = jest.fn();
    const element = compile({ name, onChange });
    const input = element.find('input');
    input.val(value);
    input.triggerHandler('change');
    expect(onChange).toHaveBeenCalledWith({ name, value });
  });
});
