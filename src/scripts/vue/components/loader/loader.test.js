import { shallowMount } from '@vue/test-utils';
import pdLoader from './loader';

describe('Loader', () => {
  function mount(){
    return shallowMount(pdLoader);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('pd-loader');
  });
});
