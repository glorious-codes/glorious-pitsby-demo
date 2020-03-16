import toasterService from './toaster';

describe('Toaster Service', () => {
  beforeEach(() => {
    window.vanillaComponents.toaster.pop = jest.fn();
  });

  it('should pop a toast using vanilla toaster', () => {
    const message = 'Message!';
    const theme = 'success';
    toasterService.pop({ message, theme });
    expect(vanillaComponents.toaster.pop).toHaveBeenCalledWith({ message, theme });
  });
});
