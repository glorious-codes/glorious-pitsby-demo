describe('Column', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile) => {
      const scope = $rootScope.$new(true);
      compile = (bindings = {}, content = '') => {
        const template = `<pd-col
                            data-size="{{ $ctrl.size }}"
                            data-offset="{{ $ctrl.offset }}">
                            ${content}
                          </pd-col>`;
        scope.$ctrl = bindings;
        const element = $compile(template)(scope);
        scope.$digest();
        return element;
      };
    });
  });

  it('should have appropriate css class', () => {
    const element = compile();
    expect(element.find('div').attr('class')).toEqual('pd-col');
  });

  it('should optionally set a size', () => {
    const element = compile({ size: 3 });
    expect(element.find('div').attr('class').includes('pd-col-3')).toEqual(true);
  });

  it('should ignore sizes greater than 12', () => {
    const element = compile({ size: 13 });
    expect(element.find('div').attr('class').includes('pd-col-13')).toEqual(false);
  });

  it('should ignore sizes lower than 1', () => {
    const element = compile({ size: 0 });
    expect(element.find('div').attr('class').includes('pd-col-0')).toEqual(false);
  });

  it('should optionally set a offset', () => {
    const element = compile({ offset: 3 });
    expect(element.find('div').attr('class').includes('pd-col-offset-3')).toEqual(true);
  });

  it('should ignore offsets greater than 11', () => {
    const element = compile({ offset: 12 });
    expect(element.find('div').attr('class').includes('pd-col-offset-12')).toEqual(false);
  });

  it('should ignore offsets lower than 1', () => {
    const element = compile({ offset: 0 });
    expect(element.find('div').attr('class').includes('pd-col-offset-0')).toEqual(false);
  });

  it('should render some content', () => {
    const element = compile({}, '<p>Hello!</p>');
    expect(element.find('p').text()).toEqual('Hello!');
  });
});
