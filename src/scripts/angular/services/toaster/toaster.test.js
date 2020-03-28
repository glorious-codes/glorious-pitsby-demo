describe('Toaster Service', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    compile = () => {
      let toaster;
      inject($injector => {
        toaster = $injector.get('toaster');
      });
      return toaster;
    };
    vanillaComponents.toaster.pop = jest.fn();
  });

  it('should pop a toast', () => {
    const toast = { message: 'Danger Toast', theme: 'danger' };
    const toaster = compile();
    toaster.pop(toast);
    expect(vanillaComponents.toaster.pop).toHaveBeenCalledWith(toast);
  });
});
