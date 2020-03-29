describe('Button', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile) => {
      const scope = $rootScope.$new(true);
      compile = (bindings = {}, content = '') => {
        const template = `<pd-button
                            data-theme="{{ $ctrl.theme }}"
                            data-type="{{ $ctrl.type }}"
                            data-block="$ctrl.block"
                            data-disabled="$ctrl.disabled"
                            on-click="$ctrl.onClick">
                            ${content}
                          </pd-button>`;
        scope.$ctrl = bindings;
        const element = $compile(template)(scope);
        scope.$digest();
        return element;
      };
    });
  });

  it('should have appropriate css class', () => {
    const element = compile();
    expect(element.find('button').attr('class').trim()).toEqual('pd-button');
  });

  it('should set type as button by default', () => {
    const element = compile();
    expect(element.find('button').attr('type').trim()).toEqual('button');
  });

  it('should optionally set a custom type', () => {
    const type = 'submit';
    const element = compile({ type });
    expect(element.find('button').attr('type').trim()).toEqual(type);
  });

  it('should optionally set a primary theme', () => {
    const element = compile({ theme: 'primary' });
    expect(element.find('button').attr('class').includes('pd-button-primary')).toEqual(true);
  });

  it('should optionally display as block', () => {
    const element = compile({ block: true });
    expect(element.find('button').attr('class').includes('pd-button-block')).toEqual(true);
  });

  it('should be enabled by default', () => {
    const element = compile();
    expect(element.find('button').attr('disabled')).toBeFalsy();
  });

  it('should optionally be disabled', () => {
    const element = compile({ disabled: true });
    expect(element.find('button').attr('disabled')).toBeTruthy();
  });

  it('should execute click callback on click', () => {
    const onClick = jest.fn();
    const element = compile({ onClick });
    element.find('button').triggerHandler('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should render some content', () => {
    const element = compile({}, '<span>Item Content</span>');
    expect(element.find('span').text()).toEqual('Item Content');
  });
});
