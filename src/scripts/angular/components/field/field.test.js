describe('Field', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile, $timeout) => {
      const scope = $rootScope.$new(true);
      compile = (bindings = {}, content = '') => {
        const template = `<pd-field data-label="{{ $ctrl.label }}">
                            ${content}
                          </pd-field>`;
        scope.$ctrl = bindings;
        const element = $compile(template)(scope);
        scope.$digest();
        $timeout.flush();
        return element;
      };
    });
  });

  it('should have appropriate css class', () => {
    const element = compile();
    expect(element.find('div').attr('class')).toEqual('pd-field');
  });

  it('should render a label', () => {
    const label = 'Name';
    const element = compile({ label });
    expect(element.find('label').text()).toEqual(label);
  });

  it('should not contain required css class by default', () => {
    const element = compile();
    expect(element.find('div').attr('class').includes('pd-field-required')).toEqual(false);
  });

  it('should contain required css class if child input is required', () => {
    const element = compile({}, '<pd-input data-type="text" data-required="true" />');
    expect(element.find('div').attr('class').includes('pd-field-required')).toEqual(true);
  });

  it('should render some content', () => {
    const element = compile({}, '<p>Hello!</p>');
    expect(element.find('p').text()).toEqual('Hello!');
  });
});
