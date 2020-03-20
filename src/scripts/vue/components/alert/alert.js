import template from './alert.html';

const pdAlert = {
  name: 'pd-alert',
  props: {
    theme: {
      type: String
    },
    triggerText: {
      type: String,
      default: 'Retry'
    },
    onTriggerClick: {
      type: Function
    }
  },
  computed: {
    classes(){
      return {
        [`pd-alert-${this.theme}`]: isThemeValid(this.theme),
        'pd-alert-has-trigger': this.onTriggerClick
      };
    }
  },
  template
};

function isThemeValid(theme){
  return ['success', 'danger'].includes(theme);
}

export default pdAlert;
