import { shallowMount } from '@vue/test-utils';
import pdField from './field';

describe('Field', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pdField, {propsData, slots: { default: content }});
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
    expect(wrapper.vm.shouldShowAsterisk).toEqual(false);
  });

  it('should contain a label asterisk if child input is required', () => {
    const wrapper = mount({ label: 'Name' }, '<input type="text" required />');
    expect(wrapper.vm.shouldShowAsterisk).toEqual(true);
  });

  it('should render some content', () => {
    const content = '<p>Hello!</p>';
    const wrapper = mount({ label: 'Name' }, content);
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });
});
