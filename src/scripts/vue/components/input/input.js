import template from './input.html';

const pdInput = {
  name: 'pd-input',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String
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
  computed: {
    inputType(){
      return isTypeValid(this.type) ? this.type : 'text';
    }
  },
  template
};

function isTypeValid(type){
  return [
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'time',
    'url',
    'week'
  ].includes(type);
}

export default pdInput;
