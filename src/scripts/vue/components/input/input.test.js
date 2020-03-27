import { shallowMount } from '@vue/test-utils';
import pdInput from './input';

describe('Input', () => {
  function mount(propsData = {}){
    return shallowMount(pdInput, { propsData });
  }

  function buildRequiredProps(){
    return { name: 'email', onChange: jest.fn() };
  }

  it('should have appropriate css class', () => {
    const wrapper = mount(buildRequiredProps());
    expect(wrapper.classes()).toContain('pd-input');
  });

  it('should set type as text by default', () => {
    const wrapper = mount(buildRequiredProps());
    expect(wrapper.attributes('type')).toEqual('text');
  });

  it('should optionally set a custom type', () => {
    const type = 'email';
    const props = Object.assign({}, buildRequiredProps(), { type });
    const wrapper = mount(props);
    expect(wrapper.attributes('type')).toEqual(type);
  });

  it('should have no value by default', () => {
    const wrapper = mount(buildRequiredProps());
    expect(wrapper.vm.$el.value).toEqual('');
  });

  it('should optionally set an initial value', () => {
    const value = 'Rafael';
    const props = Object.assign({}, buildRequiredProps(), { value });
    const wrapper = mount(props);
    expect(wrapper.vm.$el.value).toEqual(value);
  });

  it('should not be required by default', () => {
    const wrapper = mount(buildRequiredProps());
    expect(wrapper.attributes('required')).toBeFalsy();
  });

  it('should optionally be required', () => {
    const required = true;
    const props = Object.assign({}, buildRequiredProps(), { required });
    const wrapper = mount(props);
    expect(wrapper.attributes('required')).toBeTruthy();
  });

  it('should be enabled by default', () => {
    const wrapper = mount(buildRequiredProps());
    expect(wrapper.attributes('disabled')).toBeFalsy();
  });

  it('should optionally be disabled', () => {
    const disabled = true;
    const props = Object.assign({}, buildRequiredProps(), { disabled });
    const wrapper = mount(props);
    expect(wrapper.attributes('disabled')).toBeTruthy();
  });

  it('should execute change callback on change passing input\'s name and value', () => {
    const name = 'name';
    const value = 'Rafael';
    const onChange = jest.fn();
    const wrapper = mount({ name, onChange });
    wrapper.element.value = value;
    wrapper.trigger('input');
    expect(onChange).toHaveBeenCalledWith({ name, value });
  });
});
