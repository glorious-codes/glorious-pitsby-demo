import { shallowMount } from '@vue/test-utils';
import pdTextarea from './textarea';

describe('Textarea', () => {
  function mount(propsData = {}){
    return shallowMount(pdTextarea, { propsData });
  }

  function buildRequiredProps(){
    return { name: 'message' };
  }

  it('should have appropriate css class', () => {
    const wrapper = mount(buildRequiredProps());
    expect(wrapper.classes()).toContain('pd-textarea');
  });

  it('should have no value by default', () => {
    const wrapper = mount(buildRequiredProps());
    expect(wrapper.vm.$el.value.trim()).toEqual('');
  });

  it('should optionally set an initial value', () => {
    const value = 'Rafael';
    const props = Object.assign({}, buildRequiredProps(), { value });
    const wrapper = mount(props);
    expect(wrapper.vm.$el.value.trim()).toEqual(value);
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
    const name = 'message';
    const value = 'Hello!';
    const onChange = jest.fn();
    const wrapper = mount({ name, onChange });
    wrapper.element.value = value;
    wrapper.trigger('input');
    expect(onChange).toHaveBeenCalledWith({ name, value });
  });
});
