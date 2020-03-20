import { shallowMount } from '@vue/test-utils';
import pdAlert from './alert';

describe('Alert', () => {
  function mount({ theme, triggerText, onTriggerClick, content = '' } = {}){
    return shallowMount(pdAlert, {
      propsData: { theme, triggerText, onTriggerClick },
      slots: { default: content }
    });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('pd-alert');
  });

  it('should optionally set a success alert', () => {
    const wrapper = mount({ theme: 'success' });
    expect(wrapper.classes()).toContain('pd-alert-success');
  });

  it('should optionally set a danger alert', () => {
    const wrapper = mount({ theme: 'danger' });
    expect(wrapper.classes()).toContain('pd-alert-danger');
  });

  it('should optionally set a trigger', () => {
    const onTriggerClick = jest.fn();
    const wrapper = mount({ onTriggerClick });
    wrapper.find('button').trigger('click');
    expect(onTriggerClick).toHaveBeenCalled();
  });

  it('should set "Retry" as default trigger text', () => {
    const wrapper = mount({ onTriggerClick: jest.fn() });
    expect(wrapper.find('button').text()).toEqual('Retry');
  });

  it('should optionally set a trigger text', () => {
    const triggerText = 'Try Again';
    const wrapper = mount({ onTriggerClick: jest.fn(), triggerText });
    expect(wrapper.find('button').text()).toEqual(triggerText);
  });

  it('should set a trigger css class if a trigger action has been passed', () => {
    const wrapper = mount({ onTriggerClick: jest.fn() });
    expect(wrapper.classes()).toContain('pd-alert-has-trigger');
  });

  it('should render some content', () => {
    const wrapper = mount({content: '<strong>hello!</strong>'});
    expect(wrapper.find('strong').text()).toEqual('hello!');
  });
});
