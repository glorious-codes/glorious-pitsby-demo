import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './button';

describe('Button', () => {
  function mount(props = {}){
    return shallow(
      <Button
        type={ props.type }
        theme={ props.theme }
        disabled={ props.disabled }
        onClick={ props.onClick }>
        { props.content }
      </Button>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('button');
  });

  it('should set type as button by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('type')).toEqual('button');
  });

  it('should optionally set a custom type', () => {
    const type = 'submit';
    const wrapper = mount({ type });
    expect(wrapper.prop('type')).toEqual(type);
  });

  it('should optionally set a primary theme', () => {
    const wrapper = mount({ theme: 'primary' });
    expect(wrapper.prop('className').includes('button-primary')).toEqual(true);
  });

  it('should be enabled by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('disabled')).toBeFalsy();
  });

  it('should optionally be disabled', () => {
    const wrapper = mount({ disabled: true });
    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it('should execute click callback on click', () => {
    const onClick = jest.fn();
    const wrapper = mount({ onClick });
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
