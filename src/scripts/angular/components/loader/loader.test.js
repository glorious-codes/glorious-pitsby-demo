describe('Loader', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile) => {
      const scope = $rootScope.$new(true);
      compile = () => {
        const element = $compile('<pd-loader />')(scope);
        scope.$digest();
        return element;
      };
    });
  });

  it('should have appropriate css class', () => {
    const element = compile();
    expect(element.find('div').attr('class')).toEqual('pd-loader');
  });
});
