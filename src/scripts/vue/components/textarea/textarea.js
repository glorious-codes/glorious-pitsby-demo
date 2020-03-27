import template from './textarea.html';

const pdTextarea = {
  name: 'pd-textarea',
  props: {
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    value: {
      type: [String, Number]
    },
    onChange: {
      type: Function
    }
  },
  methods: {
    onInputChange({ target }){
      const { name, value } = target;
      this.$emit('input', value);
      return this.onChange && this.onChange({ name, value });
    }
  },
  template
};

export default pdTextarea;
