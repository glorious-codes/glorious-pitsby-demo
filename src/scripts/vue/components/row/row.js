import template from './row.html';

export default {
  name: 'pd-row',
  props: {
    offset: [String, Number]
  },
  computed: {
    classes(){
      return {
        [`pd-row-offset-${this.offset}`]: this.offset
      };
    }
  },
  template
};
