import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from './tag';

describe('Tag', () => {
  function mount(props = {}){
    return shallow(
      <Tag>
        { props.content }
      </Tag>
    );
  }

  it('should contain appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('pe-tag');
  });

  it('should render some content', () => {
    const content = <p>Hello</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
