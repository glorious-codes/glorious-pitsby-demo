import React from 'react';
import { shallow } from 'enzyme';
import { PromiseMock } from '@vanilla/mocks/promise';
import { Alert } from '@react/components/alert/alert';
import { Loader } from '@react/components/loader/loader';
import toasterService from '@react/services/toaster/toaster';
import { Form } from '@react/components/form/form';

describe('Form', () => {
  function submitForm(wrapper){
    const eventMock = { preventDefault: jest.fn() };
    wrapper.simulate('submit', eventMock);
    return eventMock;
  }

  function simulateSubmit(resultType, { errorMessage, successMessage, shouldAbortRequest } = {}){
    const onSubmit = jest.fn(() => new PromiseMock(resultType, {
      response: {},
      shouldAbortRequest
    }));
    const wrapper = mount({
      onSubmit,
      onSubmitError: jest.fn(),
      onSubmitSuccess: jest.fn(),
      errorMessage,
      successMessage
    });
    submitForm(wrapper);
    return wrapper;
  }

  beforeEach(() => {
    toasterService.pop = jest.fn();
  });

  function mount(props = {}){
    return shallow(
      <Form
        onSubmit={ props.onSubmit }
        onSubmitSuccess={ props.onSubmitSuccess }
        onSubmitError={ props.onSubmitError }
        errorMessage={ props.errorMessage }
        successMessage={ props.successMessage }>
        { props.content }
      </Form>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('pd-form');
  });

  it('should execute submit callback on submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success'));
    const wrapper = mount({ onSubmit });
    const evt = submitForm(wrapper);
    expect(evt.preventDefault).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should optionally execute submit success callback on submit success', () => {
    const response = { some: 'response' };
    const onSubmit = jest.fn(() => new PromiseMock('success', { response }));
    const onSubmitSuccess = jest.fn();
    const wrapper = mount({ onSubmit, onSubmitSuccess });
    submitForm(wrapper);
    expect(onSubmitSuccess).toHaveBeenCalledWith(response);
  });

  it('should optionally execute submit error callback on submit error', () => {
    const err = { some: 'error' };
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: err }));
    const onSubmitError = jest.fn();
    const wrapper = mount({ onSubmit, onSubmitError });
    submitForm(wrapper);
    expect(onSubmitError).toHaveBeenCalledWith(err);
  });

  it('should contain processing css class on form submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onSubmit });
    submitForm(wrapper);
    expect(wrapper.prop('className').includes('pd-form-processing')).toEqual(true);
  });

  it('should remove processing css class on submit complete', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { response: {} }));
    const wrapper = mount({ onSubmit });
    submitForm(wrapper);
    expect(wrapper.prop('className').includes('pd-form-processing')).toEqual(false);
  });

  it('should show loader on submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onSubmit });
    submitForm(wrapper);
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('should remove loader on submit complete', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { response: {} }));
    const wrapper = mount({ onSubmit });
    submitForm(wrapper);
    expect(wrapper.find(Loader).length).toEqual(0);
  });

  it('should show default error alert on submit error', () => {
    const wrapper = simulateSubmit('error');
    const alertElement = wrapper.find(Alert);
    expect(alertElement.length).toEqual(1);
    expect(alertElement.prop('theme')).toEqual('danger');
    expect(alertElement.prop('children')).toEqual('Sorry, something went wrong.');
  });

  it('should optionally show a custom error alert on submit error', () => {
    const errorMessage = 'Some custom error!';
    const wrapper = simulateSubmit('error', { errorMessage });
    const alertElement = wrapper.find(Alert);
    expect(alertElement.prop('children')).toEqual(errorMessage);
  });

  it('should re-submit on error alert trigger click', () => {
    const evtMock = { preventDefault: jest.fn() };
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: {} }));
    const wrapper = mount({ onSubmit });
    submitForm(wrapper);
    wrapper.find(Alert).prop('onTriggerClick')(evtMock);
    expect(onSubmit.mock.calls.length).toEqual(2);
  });

  it('should show success message on submit success', () => {
    simulateSubmit('success');
    expect(toasterService.pop).toHaveBeenCalledWith({
      theme: 'success',
      message: 'Perfect! Request successfully processed.'
    });
  });

  it('should optionally show a custom success message on submit success', () => {
    const successMessage = 'Great!';
    simulateSubmit('success', { successMessage });
    expect(toasterService.pop).toHaveBeenCalledWith({
      theme: 'success',
      message: successMessage
    });
  });

  it('should render some content', () => {
    const content = <p>Hello</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
