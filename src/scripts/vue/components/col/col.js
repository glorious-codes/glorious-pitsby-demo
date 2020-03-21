import template from './col.html';

const pdCol = {
  name: 'pd-col',
  props: {
    size: {
      type: [String, Number],
      required: true
    },
    offset: {
      type: [String, Number]
    },
  },
  computed: {
    classes(){
      return {
        [`pd-col-${this.size}`]: isSizeValid(this.size),
        [`pd-col-offset-${this.offset}`]: this.offset && isOffsetValid(this.offset)
      };
    }
  },
  template
};

function isSizeValid(value){
  const size = parseInt(value);
  return size >= 1 && size <= 12;
}

function isOffsetValid(value){
  const offset = parseInt(value);
  return offset >= 1 && offset <= 11;
}

export default pdCol;
