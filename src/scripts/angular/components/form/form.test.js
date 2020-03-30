import { PromiseMock } from '@vanilla/mocks/promise';

describe('Form', () => {
  let compile, toaster, $timeout;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile, $injector) => {
      $timeout = $injector.get('$timeout');
      toaster = $injector.get('toaster');
      const scope = $rootScope.$new(true);
      compile = (bindings = {}, content = '') => {
        const template = `<pd-form
                            on-submit="$ctrl.onSubmit"
                            on-submit-success="$ctrl.onSubmitSuccess"
                            on-submit-error="$ctrl.onSubmitError"
                            data-success-message="{{ $ctrl.successMessage }}"
                            data-error-message="{{ $ctrl.errorMessage }}">
                            ${content}
                          </pd-form>`;
        scope.$ctrl = bindings;
        const element = $compile(template)(scope);
        scope.$digest();
        return element;
      };
    });
    toaster.pop = jest.fn();
  });

  function submitForm(element){
    const form = element.find('form');
    form.triggerHandler('submit');
    $timeout.flush();
    return form;
  }

  it('should have appropriate css class', () => {
    const element = compile();
    expect(element.find('form').attr('class').includes('pd-form')).toEqual(true);
  });

  it('should execute submit callback on submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', {}));
    const element = compile({ onSubmit });
    submitForm(element);
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should optionally execute submit success callback on submit success', () => {
    const response = { some: 'response' };
    const onSubmit = jest.fn(() => new PromiseMock('success', { response }));
    const onSubmitSuccess = jest.fn();
    const element = compile({ onSubmit, onSubmitSuccess });
    submitForm(element);
    expect(onSubmitSuccess).toHaveBeenCalledWith(response);
  });

  it('should optionally execute submit error callback on submit error', () => {
    const err = { some: 'err' };
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: err }));
    const onSubmitError = jest.fn();
    const element = compile({ onSubmit, onSubmitError });
    submitForm(element);
    expect(onSubmitError).toHaveBeenCalledWith(err);
  });

  it('should contain processing css class on form submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const element = compile({ onSubmit });
    const form = submitForm(element);
    expect(form.attr('class').includes('pd-form-processing')).toEqual(true);
  });

  it('should remove processing css class on submit complete', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', {}));
    const element = compile({ onSubmit });
    const form = submitForm(element);
    expect(form.attr('class').includes('pd-form-processing')).toEqual(false);
  });

  it('should show loader on submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const element = compile({ onSubmit });
    const form = submitForm(element);
    expect(form.find('pd-loader').length).toEqual(1);
  });

  it('should remove loader on submit complete', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', {}));
    const element = compile({ onSubmit });
    const form = submitForm(element);
    expect(form.find('pd-loader').length).toEqual(0);
  });

  it('should show default error alert on submit error', () => {
    const onSubmit = jest.fn(() => new PromiseMock('error', {}));
    const element = compile({ onSubmit });
    submitForm(element);
    const alert = element.find('pd-alert');
    expect(alert.attr('data-theme')).toEqual('danger');
    expect(alert.text().includes('Sorry, something went wrong.')).toEqual(true);
  });

  it('should optionally show a custom error alert on submit error', () => {
    const errorMessage = 'Ops!';
    const onSubmit = jest.fn(() => new PromiseMock('error', {}));
    const element = compile({ onSubmit, errorMessage });
    submitForm(element);
    expect(element.find('pd-alert').text().includes(errorMessage)).toEqual(true);
  });

  it('should re-submit on error alert trigger click', () => {
    const onSubmit = jest.fn(() => new PromiseMock('error', {}));
    const element = compile({ onSubmit });
    submitForm(element);
    element.find('pd-alert').find('button').triggerHandler('click');
    expect(onSubmit.mock.calls.length).toEqual(2);
  });

  it('should show success message on submit success', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', {}));
    const element = compile({ onSubmit });
    submitForm(element);
    expect(toaster.pop).toHaveBeenCalledWith({
      theme: 'success',
      message: 'Perfect! Request successfully processed.'
    });
  });

  it('should optionally show a custom success message on submit success', () => {
    const successMessage = 'Wow!';
    const onSubmit = jest.fn(() => new PromiseMock('success', {}));
    const element = compile({ onSubmit, successMessage });
    submitForm(element);
    expect(toaster.pop).toHaveBeenCalledWith({
      theme: 'success',
      message: successMessage
    });
  });

  it('should render some content', () => {
    const element = compile({}, '<p>Hello!</p>');
    expect(element.find('p').text()).toEqual('Hello!');
  });
});
