import template from './field.html';

const pdField = {
  name: 'pd-field',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      shouldShowAsterisk: false
    };
  },
  mounted(){
    this.setAsteriskVisibility(this.containsRequiredChild(this.$el));
  },
  methods: {
    containsRequiredChild(element){
      return !!element.querySelector('[required]');
    },
    setAsteriskVisibility(shouldShow){
      this.shouldShowAsterisk = shouldShow;
    }
  },
  template
};

export default pdField;
