import components from '@vue/components';
import services from '@vue/services';

export default {
  install(Vue) {
    Object.keys(components).forEach(key => {
      const component = components[key];
      Vue.component(component.name, component);
    });
  },
  services
};
