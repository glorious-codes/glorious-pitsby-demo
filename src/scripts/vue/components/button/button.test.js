import { shallowMount } from '@vue/test-utils';
import pdButton from './button';

describe('Button', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pdButton, { propsData, slots: { default: content } });
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('pd-button');
  });

  it('should set type as button by default', () => {
    const wrapper = mount();
    expect(wrapper.attributes('type')).toEqual('button');
  });

  it('should optionally set a custom type', () => {
    const type = 'submit';
    const wrapper = mount({ type });
    expect(wrapper.attributes('type')).toEqual(type);
  });

  it('should optionally set a primary theme', () => {
    const wrapper = mount({ theme: 'primary' });
    expect(wrapper.classes()).toContain('pd-button-primary');
  });

  it('should optionally display as block', () => {
    const wrapper = mount({ block: true });
    expect(wrapper.classes()).toContain('pd-button-block');
  });

  it('should be enabled by default', () => {
    const wrapper = mount();
    expect(wrapper.attributes('disabled')).toBeFalsy();
  });

  it('should optionally be disabled', () => {
    const wrapper = mount({ disabled: true });
    expect(wrapper.attributes('disabled')).toBeTruthy();
  });

  it('should execute click callback on click', () => {
    const onClick = jest.fn();
    const wrapper = mount({ onClick });
    wrapper.find('button').trigger('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should render some content', () => {
    const wrapper = mount({}, '<p>Click here</p>');
    expect(wrapper.text()).toEqual('Click here');
  });
});
