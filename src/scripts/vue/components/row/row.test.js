import { shallowMount } from '@vue/test-utils';
import pdRow from './row';

describe('Row', () => {
  function mount(propsData, slots){
    return shallowMount(pdRow, {propsData, slots});
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('pd-row');
  });

  it('should optiaonally be vertically offset', () => {
    const wrapper = mount({ offset: '3' });
    expect(wrapper.classes().includes('pd-row-offset-3')).toEqual(true);
  });

  it('should render some content', () => {
    const wrapper = mount({}, {default: '<p>hello!</p>'});
    expect(wrapper.find('p').text()).toEqual('hello!');
  });
});
