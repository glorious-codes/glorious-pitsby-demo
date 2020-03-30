import { shallowMount } from '@vue/test-utils';
import pdField from './field';

describe('Field', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pdField, {propsData, slots: { default: content }});
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({ label: 'Name' });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).toContain('pd-field');
    });
  });

  it('should render a label', () => {
    const label = 'Name';
    const wrapper = mount({ label });
    expect(wrapper.find('label').text()).toEqual(label);
  });

  it('should not contain required css class by default', () => {
    const wrapper = mount({ label: 'Name' });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes().includes('pd-field-required')).toEqual(false);
    });
  });

  it('should contain required css class if child input is required', () => {
    const wrapper = mount({ label: 'Name' }, '<input type="text" required="required" />');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes().includes('pd-field-required')).toEqual(true);
    });
  });

  it('should render some content', () => {
    const content = '<p>Hello!</p>';
    const wrapper = mount({ label: 'Name' }, content);
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });
});
