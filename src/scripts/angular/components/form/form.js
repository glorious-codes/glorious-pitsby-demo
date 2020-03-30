import template from './form.html';

function controller($timeout, toaster){
  const $ctrl = this;

  $ctrl.handleSubmit = () => {
    setAlert(null);
    setProcessing(true);
    $ctrl.onSubmit().then(response => {
      $timeout(() => handleSubmitSuccess(response));
    }, err => {
      $timeout(() => handleSubmitError(err));
    });
  };

  function handleSubmitSuccess(response){
    setProcessing(false);
    popToast(buildSuccessToat($ctrl.successMessage));
    handleCustomCallback($ctrl.onSubmitSuccess, response);
  }

  function handleSubmitError(err){
    setProcessing(false);
    setAlert(buildErrorAlert($ctrl.errorMessage, $ctrl.handleSubmit));
    handleCustomCallback($ctrl.onSubmitError, err);
  }

  function setProcessing(processing){
    $ctrl.processing = processing;
  }

  function setAlert(alert){
    $ctrl.alert = alert;
  }

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
    toaster.pop(toast);
  }

  function handleCustomCallback(callback, data){
    if(callback)
      callback(data);
  }
}

controller.$inject = ['$timeout','toaster'];

export default {
  transclude: true,
  bindings: {
    onSubmit: '=',
    onSubmitSuccess: '=',
    onSubmitError: '=',
    successMessage: '@',
    errorMessage: '@'
  },
  controller,
  template
};
