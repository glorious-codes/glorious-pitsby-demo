import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from './tag';

describe('Tag', () => {
  function mount(props = {}){
    return shallow(
      <Tag theme={props.theme}>
        { props.content }
      </Tag>
    );
  }

  it('should contain appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('tag');
  });

  it('should contain theme css class if a valid theme is passed', () => {
    const wrapper = mount({ theme: 'danger' });
    expect(wrapper.prop('className').includes('tag-danger')).toEqual(true);
  });

  it('should not contain theme css class if an invalid theme is passed', () => {
    const wrapper = mount({ theme: 'dark' });
    expect(wrapper.prop('className')).toEqual('tag');
  });

  it('should render some content', () => {
    const content = <p>Hello</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
