import React from 'react';
import { shallow } from 'enzyme';
import { Row } from './row';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <Row offset={ props.offset }>
        { props.content }
      </Row>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('pd-row');
  });

  it('should optionally offset row', () => {
    const wrapper = mount({ offset: 4 });
    expect(wrapper.prop('className').includes('pd-row-offset-4')).toEqual(true);
  });

  it('should ignore offsets greater than 10', () => {
    const wrapper = mount({ offset: 11 });
    expect(wrapper.prop('className').includes('pd-row-offset-11')).toEqual(false);
  });

  it('should ignore offsets lower than 1', () => {
    const wrapper = mount({ offset: 0 });
    expect(wrapper.prop('className').includes('pd-row-offset-0')).toEqual(false);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
