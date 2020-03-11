import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './input';

describe('Input', () => {
  function mount(props = {}){
    return shallow(
      <Input
        type={ props.type }
        value={ props.value }
        disabled={ props.disabled }
        required={ props.required }
        onChange={ props.onChange } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('input');
  });

  it('should set type as text by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('type')).toEqual('text');
  });

  it('should optionally set a custom type', () => {
    const type = 'email';
    const wrapper = mount({ type });
    expect(wrapper.prop('type')).toEqual(type);
  });

  it('should have no value by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('value')).toEqual(undefined);
  });

  it('should optionally set an initial value', () => {
    const value = 'Rafael';
    const wrapper = mount({ value });
    expect(wrapper.prop('value')).toEqual(value);
  });

  it('should not be required by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('required')).toBeFalsy();
  });

  it('should optionally be required', () => {
    const wrapper = mount({ required: true });
    expect(wrapper.prop('required')).toBeTruthy();
  });

  it('should be enabled by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('disabled')).toBeFalsy();
  });

  it('should optionally be disabled', () => {
    const wrapper = mount({ disabled: true });
    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it('should execute change callback on change passing input\'s value', () => {
    const evtMock = { target: { value: 'Camargo' } };
    const onChange = jest.fn();
    const wrapper = mount({ onChange });
    wrapper.simulate('change', evtMock);
    expect(onChange).toHaveBeenCalledWith(evtMock.target.value);
  });
});
