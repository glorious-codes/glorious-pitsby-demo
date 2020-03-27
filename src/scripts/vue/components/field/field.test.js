import { shallowMount } from '@vue/test-utils';
import pdField from './field';

describe('Field', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pdField, {propsData, slots: { default: content }});
  }

  function countAsterisks(wrapper){
    return wrapper.findAll('[data-field-asterisk]').length;
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({ label: 'Name' });
    expect(wrapper.classes()).toContain('pd-field');
  });

  it('should render a label', () => {
    const label = 'Name';
    const wrapper = mount({ label });
    expect(wrapper.find('label').text()).toEqual(label);
  });

  it('should not contain a label asterisk by default', () => {
    const wrapper = mount({ label: 'Name' });
    wrapper.vm.$nextTick(() => {
      expect(countAsterisks(wrapper)).toEqual(0);
    });
  });

  it('should contain a label asterisk if child input is required', () => {
    const wrapper = mount({ label: 'Name' }, '<input type="text" required />');
    wrapper.vm.$nextTick(() => {
      expect(countAsterisks(wrapper)).toEqual(1);
    });
  });

  it('should render some content', () => {
    const content = '<p>Hello!</p>';
    const wrapper = mount({ label: 'Name' }, content);
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });
});
