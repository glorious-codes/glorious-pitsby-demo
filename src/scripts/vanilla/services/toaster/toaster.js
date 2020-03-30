import toastBuilder from '@vanilla/builders/toast/toast';

const _public = {};

_public.pop = ({ theme, message } = {}) => {
  const toaster = getToaster();
  toaster.prepend(toastBuilder.build({ theme, message }));
};

function getToaster(){
  const toaster = document.querySelector('[data-toaster]');
  return toaster ? toaster : buildToaster();
}

function buildToaster(){
  const toaster = document.createElement('div');
  toaster.classList.add('pd-toaster');
  toaster.setAttribute('data-toaster', '');
  document.body.append(toaster);
  return toaster;
}

export default _public;
