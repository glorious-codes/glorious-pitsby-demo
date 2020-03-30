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
      cssClasses: ''
    };
  },
  mounted(){
    this.setCssClasses(buildCssClasses(this.$el));
  },
  methods: {
    setCssClasses(cssClasses){
      this.cssClasses = cssClasses;
    }
  },
  template
};

function buildCssClasses(element){
  const cssClasses = ['pd-field'];
  if(containsRequiredChild(element))
    cssClasses.push('pd-field-required');
  return cssClasses.join(' ');
}

function containsRequiredChild(element){
  return element && !!element.querySelector('[required="required"]');
}

export default pdField;
