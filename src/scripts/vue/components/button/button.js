import template from './button.html';

const pdButton = {
  name: 'pd-button',
  props: {
    type: {
      type: String
    },
    theme: {
      type: String
    },
    block: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    onClick: {
      type: Function
    }
  },
  methods: {
    onButtonClick(){
      return this.onClick &&  this.onClick();
    }
  },
  computed: {
    classes(){
      return {
        [`pd-button-${this.theme}`]: isThemeValid(this.theme),
        'pd-button-block': this.block
      };
    },
    buttonType(){
      return isTypeValid(this.type) ? this.type : 'button';
    }
  },
  template
};

function isThemeValid(theme){
  return ['primary'].includes(theme);
}

function isTypeValid(type){
  return ['submit', 'reset'].includes(type);
}

export default pdButton;
