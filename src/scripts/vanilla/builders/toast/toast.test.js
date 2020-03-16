import toastBuilder from './toast.js';

jest.useFakeTimers();

describe('Toast Builder', () => {
  it('should render a message', () => {
    const message = 'Success!';
    const toast = toastBuilder.build({ message });
    const messageElement = toast.querySelector('[data-toast-message]');
    expect(messageElement.textContent).toEqual(message);
  });

  it('should optionally set a theme', () => {
    const toast = toastBuilder.build({ theme: 'success' });
    expect(toast.classList.contains('pd-toast-success')).toEqual(true);
  });

  it('should destroy toast on close button click', () => {
    const container = document.createElement('div');
    const toast = toastBuilder.build();
    container.append(toast);
    expect(container.querySelectorAll('[data-toast]').length).toEqual(1);
    toast.querySelector('[data-toast-close-button]').click();
    expect(container.querySelectorAll('[data-toast]').length).toEqual(0);
  });

  it('should destroy toast after five seconds', () => {
    const container = document.createElement('div');
    const toast = toastBuilder.build();
    container.append(toast);
    expect(container.querySelectorAll('[data-toast]').length).toEqual(1);
    jest.advanceTimersByTime(5001);
    expect(container.querySelectorAll('[data-toast]').length).toEqual(0);
  });
});
