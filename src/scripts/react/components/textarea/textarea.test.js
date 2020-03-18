import React from 'react';
import { shallow } from 'enzyme';
import { Textarea } from './textarea';

describe('Textarea', () => {
  function mount(props = {}){
    return shallow(
      <Textarea
        name={ props.name }
        value={ props.value }
        disabled={ props.disabled }
        required={ props.required }
        onChange={ props.onChange }>
      </Textarea>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('pd-textarea');
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

  it('should execute change callback on change passing input\'s name and value', () => {
    const evtMock = { target: { name: 'name', value: 'Camargo' } };
    const onChange = jest.fn();
    const wrapper = mount({ onChange });
    wrapper.simulate('change', evtMock);
    const { name, value } = evtMock.target;
    expect(onChange).toHaveBeenCalledWith({ name, value });
  });
});
