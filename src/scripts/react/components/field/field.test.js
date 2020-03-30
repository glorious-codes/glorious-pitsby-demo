import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '@react/components/input/input';
import { Field } from './field';

describe('Field', () => {
  function mount(props = {}){
    return shallow(
      <Field label={ props.label }>
        { props.content }
      </Field>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('pd-field');
  });

  it('should render a label', () => {
    const label = 'Name';
    const wrapper = mount({ label });
    expect(wrapper.find('label').text().trim()).toEqual(label);
  });

  it('should not contain required css class by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('className').includes('pd-field-required')).toEqual(false);
  });

  it('should contain required css class if child input is required', () => {
    const wrapper = mount({ content: <Input required /> });
    expect(wrapper.prop('className').includes('pd-field-required')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
