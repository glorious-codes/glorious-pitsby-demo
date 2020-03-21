import { shallowMount } from '@vue/test-utils';
import pdCol from './col';

describe('Column', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(pdCol, {
      propsData,
      slots: {
        default: content
      }
    });
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({ size: 3 });
    expect(wrapper.classes()).toContain('pd-col');
  });

  it('should optionally set a size', () => {
    const wrapper = mount({ size: 3 });
    expect(wrapper.classes()).toContain('pd-col-3');
  });

  it('should ignore sizes greater than 12', () => {
    const wrapper = mount({ size: 13 });
    expect(wrapper.classes().includes('pd-col-13')).toEqual(false);
  });

  it('should ignore sizes lower than 1', () => {
    const wrapper = mount({ size: 0 });
    expect(wrapper.classes().includes('pd-col-0')).toEqual(false);
  });

  it('should optionally set a offset', () => {
    const wrapper = mount({ size: 1, offset: 3 });
    expect(wrapper.classes()).toContain('pd-col-offset-3');
  });

  it('should ignore offsets greater than 11', () => {
    const wrapper = mount({ size: 12 });
    expect(wrapper.classes().includes('pd-col-offset-12')).toEqual(false);
  });

  it('should ignore offsets lower than 1', () => {
    const wrapper = mount({ size: 1, offset: 0 });
    expect(wrapper.classes().includes('pd-col-offset-0')).toEqual(false);
  });

  it('should render some content', () => {
    const wrapper = mount({ size: 1 }, '<p>hello!</p>');
    expect(wrapper.find('p').text()).toEqual('hello!');
  });
});
