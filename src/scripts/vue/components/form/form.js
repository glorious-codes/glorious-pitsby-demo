import pdAlert from '@vue/components/alert/alert';
import pdLoader from '@vue/components/loader/loader';
import toasterService from '@vue/services/toaster/toaster';
import template from './form.html';

const pdForm = {
  name: 'pd-form',
  components: {
    pdAlert,
    pdLoader
  },
  props: {
    onSubmit: {
      type: Function,
      required: true
    },
    onSubmitSuccess: {
      type: Function
    },
    onSubmitError: {
      type: Function
    },
    successMessage: {
      type: String
    },
    errorMessage: {
      type: String
    }
  },
  data(){
    return {
      processing: false,
      alert: null
    };
  },
  methods: {
    handleSubmit(){
      this.setAlert(null);
      this.setProcessing(true);
      this.onSubmit().then(response => {
        this.setProcessing(false);
        popToast(buildSuccessToat(this.successMessage));
        handleCustomCallback(this.onSubmitSuccess, response);
      }, err => {
        this.setProcessing(false);
        this.setAlert(buildErrorAlert(this.errorMessage, this.handleSubmit));
        handleCustomCallback(this.onSubmitError, err);
      });
    },
    setProcessing(processing){
      this.processing = processing;
    },
    setAlert(alert){
      this.alert = alert;
    }
  },
  computed: {
    classes(){
      return {
        'pd-form-processing': this.processing
      };
    }
  },
  template
};

function buildErrorAlert(message, onTriggerClick){
  return {
    theme: 'danger',
    message: message || 'Sorry, something went wrong.',
    onTriggerClick: onTriggerClick
  };
}

function buildSuccessToat(message){
  return {
    theme: 'success',
    message: message || 'Perfect! Request successfully processed.'
  };
}

function popToast(toast){
  toasterService.pop(toast);
}

function handleCustomCallback(callback, data){
  if(callback)
    callback(data);
}

export default pdForm;
