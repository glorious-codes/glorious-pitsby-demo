import React from 'react';
import { shallow } from 'enzyme';
import { Col } from './col';

describe('Col', () => {
  function mount(props = {}){
    return shallow(
      <Col size={ props.size } offset={ props.offset }>
        { props.content }
      </Col>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('col');
  });

  it('should optionally set a size', () => {
    const wrapper = mount({ size: 3 });
    expect(wrapper.prop('className').includes('col-3')).toEqual(true);
  });

  it('should ignore sizes greater than 12', () => {
    const wrapper = mount({ size: 13 });
    expect(wrapper.prop('className').includes('col-13')).toEqual(false);
  });

  it('should ignore sizes lower than 1', () => {
    const wrapper = mount({ size: 0 });
    expect(wrapper.prop('className').includes('col-0')).toEqual(false);
  });

  it('should optionally set a offset', () => {
    const wrapper = mount({ offset: 3 });
    expect(wrapper.prop('className').includes('col-offset-3')).toEqual(true);
  });

  it('should ignore offsets greater than 11', () => {
    const wrapper = mount({ size: 12 });
    expect(wrapper.prop('className').includes('col-offset-12')).toEqual(false);
  });

  it('should ignore offsets lower than 1', () => {
    const wrapper = mount({ offset: 0 });
    expect(wrapper.prop('className').includes('col-offset-0')).toEqual(false);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
