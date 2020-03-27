import { shallowMount } from '@vue/test-utils';
import { PromiseMock } from '@vanilla/mocks/promise';
import pdAlert from '@vue/components/alert/alert';
import pdLoader from '@vue/components/loader/loader';
import toasterService from '@vue/services/toaster/toaster';
import pdForm from '@vue/components/form/form';

describe('Form', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pdForm, {
      propsData, slots: { default: content }
    });
  }

  function buildRequiredProps(){
    return { onSubmit: jest.fn() };
  }

  beforeEach(() => {
    toasterService.pop = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount(buildRequiredProps());
    expect(wrapper.classes()).toContain('pd-form');
  });

  it('should execute submit callback on submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success'));
    const wrapper = mount({ onSubmit });
    wrapper.trigger('submit');
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should optionally execute submit success callback on submit success', () => {
    const response = { some: 'response' };
    const onSubmit = jest.fn(() => new PromiseMock('success', { response }));
    const onSubmitSuccess = jest.fn();
    const wrapper = mount({ onSubmit, onSubmitSuccess });
    wrapper.trigger('submit');
    expect(onSubmitSuccess).toHaveBeenCalledWith(response);
  });

  it('should optionally execute submit error callback on submit error', () => {
    const err = { some: 'error' };
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: err }));
    const onSubmitError = jest.fn();
    const wrapper = mount({ onSubmit, onSubmitError });
    wrapper.trigger('submit');
    expect(onSubmitError).toHaveBeenCalledWith(err);
  });

  it('should contain processing css class on form submit', done => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onSubmit });
    wrapper.trigger('submit');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).toContain('pd-form-processing');
      done();
    });
  });

  it('should remove processing css class on submit complete', done => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { response: {} }));
    const wrapper = mount({ onSubmit });
    wrapper.trigger('submit');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).not.toContain('pd-form-processing');
      done();
    });
  });

  it('should show loader on submit', done => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onSubmit });
    wrapper.trigger('submit');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll(pdLoader).length).toEqual(1);
      done();
    });
  });

  it('should remove loader on submit complete', done => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { response: {} }));
    const wrapper = mount({ onSubmit });
    wrapper.trigger('submit');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll(pdLoader).length).toEqual(0);
      done();
    });
  });

  it('should show default error alert on submit error', done => {
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: {} }));
    const wrapper = mount({ onSubmit });
    wrapper.trigger('submit');
    wrapper.vm.$nextTick(() => {
      const alertElement = wrapper.find(pdAlert);
      expect(alertElement.attributes('theme')).toEqual('danger');
      expect(alertElement.text().trim()).toEqual('Sorry, something went wrong.');
      done();
    });
  });

  it('should optionally show a custom error alert on submit error', done => {
    const errorMessage = 'Some custom error!';
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: {} }));
    const wrapper = mount({ onSubmit, errorMessage });
    wrapper.trigger('submit');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find(pdAlert).text().trim()).toEqual(errorMessage);
      done();
    });
  });

  it('should re-submit on error alert trigger click', done => {
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: {} }));
    const wrapper = mount({ onSubmit });
    wrapper.trigger('submit');
    wrapper.vm.$nextTick(() => {
      wrapper.vm.alert.onTriggerClick();
      expect(onSubmit.mock.calls.length).toEqual(2);
      done();
    });
  });

  it('should show success message on submit success', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { response: {} }));
    const wrapper = mount({ onSubmit });
    wrapper.trigger('submit');
    expect(toasterService.pop).toHaveBeenCalledWith({
      theme: 'success',
      message: 'Perfect! Request successfully processed.'
    });
  });

  it('should optionally show a custom success message on submit success', () => {
    const successMessage = 'Great!';
    const onSubmit = jest.fn(() => new PromiseMock('success', { response: {} }));
    const wrapper = mount({ onSubmit, successMessage });
    wrapper.trigger('submit');
    expect(toasterService.pop).toHaveBeenCalledWith({
      theme: 'success',
      message: successMessage
    });
  });

  it('should render some content', () => {
    const content = '<p>Hello</p>';
    const wrapper = mount({ onSubmit: jest.fn() }, content);
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
