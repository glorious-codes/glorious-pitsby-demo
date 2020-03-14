import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from './loader';

describe('Loader', () => {
  function mount(){
    return shallow(
      <Loader />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('pd-loader');
  });
});
