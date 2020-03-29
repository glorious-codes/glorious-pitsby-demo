describe('Row', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile) => {
      const scope = $rootScope.$new(true);
      compile = (bindings = {}, content = '') => {
        const template = `<pd-row data-offset="{{ $ctrl.offset }}">
                            ${content}
                          </pd-row>`;
        scope.$ctrl = bindings;
        const element = $compile(template)(scope);
        scope.$digest();
        return element;
      };
    });
  });

  it('should have appropriate css class', () => {
    const element = compile();
    expect(element.find('div').attr('class')).toEqual('pd-row');
  });

  it('should optionally set a offset', () => {
    const element = compile({ offset: 3 });
    expect(element.find('div').attr('class').includes('pd-row-offset-3')).toEqual(true);
  });

  it('should ignore offsets greater than 11', () => {
    const element = compile({ offset: 12 });
    expect(element.find('div').attr('class').includes('pd-row-offset-12')).toEqual(false);
  });

  it('should ignore offsets lower than 1', () => {
    const element = compile({ offset: 0 });
    expect(element.find('div').attr('class').includes('pd-row-offset-0')).toEqual(false);
  });

  it('should render some content', () => {
    const element = compile({}, '<p>Hello!</p>');
    expect(element.find('p').text()).toEqual('Hello!');
  });
});
