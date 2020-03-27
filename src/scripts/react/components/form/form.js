import '@styles/form.styl';
import React, { useState } from 'react';
import { Alert } from '@react/components/alert/alert';
import { Loader } from '@react/components/loader/loader';
import toasterService from '@react/services/toaster/toaster';

export const Form = ({
  onSubmit,
  onSubmitSuccess,
  onSubmitError,
  successMessage,
  errorMessage,
  children
}) => {
  const [alert, setAlert] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();
    setAlert(null);
    setProcessing(true);
    onSubmit().then(response => {
      setProcessing(false);
      popToast(buildSuccessToat(successMessage));
      handleCustomCallback(onSubmitSuccess, response);
    }, err => {
      setProcessing(false);
      setAlert(buildErrorAlert(errorMessage, handleSubmit));
      handleCustomCallback(onSubmitError, err);
    });
  };

  return (
    <form className={ buildCssClasses(processing) } onSubmit={ handleSubmit }>
      { handleAlert(alert) }
      { handleLoader(processing) }
      <div className="pd-form-content">
        { children }
      </div>
    </form>
  );
};

function buildCssClasses(processing){
  const baseCssClass = 'pd-form';
  return processing ? `${baseCssClass} ${baseCssClass}-processing` : baseCssClass;
}

function handleAlert(alert){
  if(alert) {
    const { theme, message, onTriggerClick } = alert;
    return (
      <Alert theme={ theme } onTriggerClick={ onTriggerClick }>
        { message }
      </Alert>
    );
  }
}

function handleLoader(processing){
  return processing ? <Loader /> : null;
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
  toasterService.pop(toast);
}

function handleCustomCallback(callback, data){
  if(callback)
    callback(data);
}
