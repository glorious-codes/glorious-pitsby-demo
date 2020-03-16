import toastBuilder from '@vanilla/builders/toast/toast';
import toaster from './toaster.js';

describe('Toaster Service', () => {
  function mockToast(){
    return document.createElement('div');
  }

  function getToaster(){
    return document.querySelector('[data-toaster]');
  }

  beforeEach(() => {
    toastBuilder.build = jest.fn(() => mockToast());
  });

  afterEach(() => {
    getToaster().remove();
  });

  it('should pop a toast', () => {
    const theme = 'success';
    const message = 'Success!';
    toaster.pop({ theme, message });
    expect(toastBuilder.build).toHaveBeenCalledWith({ theme, message });
    expect(getToaster().querySelectorAll('div').length).toEqual(1);
  });

  it('should not exist more than one toaster on document', () => {
    toaster.pop();
    toaster.pop();
    toaster.pop();
    expect(document.querySelectorAll('[data-toaster]').length).toEqual(1);
  });
});
