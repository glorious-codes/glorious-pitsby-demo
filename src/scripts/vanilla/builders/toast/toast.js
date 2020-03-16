import '@styles/toast.styl';
import domService from '@vanilla/services/dom/dom';
import template from './toast.html';

const _public = {};

_public.build = ({ theme, message = '' } = {}) => {
  const toast = domService.parseHtml(template);
  handleTheme(toast, theme);
  handleMessage(toast, message);
  handleCloseButton(toast);
  return scheduleToastDestruction(toast);
};

function handleTheme(toast, theme){
  if(isThemeValid(theme))
    toast.classList.add(`pd-toast-${theme}`);
}

function isThemeValid(theme){
  return ['success', 'danger', 'warning'].includes(theme);
}

function handleMessage(toast, message){
  const messageContainer = toast.querySelector('[data-toast-message]');
  messageContainer.textContent = message;
}

function handleCloseButton(toast){
  getCloseButton(toast).addEventListener('click', onCloseButtonClick);
}

function onCloseButtonClick({ currentTarget }){
  destroyToast(currentTarget.parentElement, currentTarget);
}

function scheduleToastDestruction(toast){
  setTimeout(() => destroyToast(toast, getCloseButton(toast)), 5000);
  return toast;
}

function getCloseButton(toast){
  return toast.querySelector('[data-toast-close-button]');
}

function destroyToast(toast, closeButton){
  closeButton.removeEventListener('click', onCloseButtonClick);
  toast.remove();
}

export default _public;
