const styles = '[data-form-container] { margin: 0 auto; max-width: 320px; }';

module.exports = {
  name: 'Form',
  examples: [
    {
      title: 'Successful Form',
      controller: function(element){
        function init(){
          queryElement('form').addEventListener('submit', onSubmit);
        }

        function onSubmit(evt){
          const form = queryElement('form');
          evt.preventDefault();
          form.classList.add('pd-form-processing');
          form.insertBefore(buildLoader(), form.firstChild);
          // Fake request simulation
          setTimeout(() => {
            const response = { status: 200, message: 'Success! Your message has been sent.' };
            onSubmitSuccess(response);
          }, 3000);
        }

        function onSubmitSuccess({ message }){
          queryElement('[data-loader]').remove();
          queryElement('form').classList.remove('pd-form-processing');
          popToast({ message, theme: 'success' });
          clearFormData();
        }

        function queryElement(selector){
          return element.querySelector(selector);
        }

        function buildLoader(){
          const loader = document.createElement('div');
          loader.setAttribute('class', 'pd-loader');
          loader.setAttribute('data-loader', '');
          return loader;
        }

        function popToast({ message, theme }){
          vanillaComponents.toaster.pop({ message, theme });
        }

        function clearFormData(){
          ['name', 'email', 'message'].forEach(selectorValue => {
            queryElement(`[name="${selectorValue}"]`).value = '';
          });
        }

        init();
      },
      template: `
      <div data-form-container>
        <form class="pd-form">
          <div class="pd-form-content">
            <div class="pd-row">
              <div class="pd-col-12">
                <div class="pd-field pd-field-required">
                  <label>Name</label>
                  <input class="pd-input" name="name" required />
                </div>
              </div>
            </div>
            <div class="pd-row">
              <div class="pd-col-12">
                <div class="pd-field pd-field-required">
                  <label>Email</label>
                  <input class="pd-input" type="email" name="email" required />
                </div>
              </div>
            </div>
            <div class="pd-row">
              <div class="pd-col-12">
                <div class="pd-field pd-field-required">
                  <label>Message</label>
                  <textarea class="pd-textarea" name="message" required></textarea>
                </div>
              </div>
            </div>
            <div class="pd-row">
              <div class="pd-col-6">
                <button class="pd-button pd-button-primary pd-button-block" type="submit">
                  Send
                </button>
              </div>
              <div class="pd-col-6">
                <button class="pd-button pd-button-block" type="reset">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>`,
      styles
    },
    {
      title: 'Failing Form',
      controller: function(element){
        function init(){
          queryElement('form').addEventListener('submit', onSubmit);
        }

        function onSubmit(evt){
          const form = queryElement('form');
          evt.preventDefault();
          form.classList.add('pd-form-processing');
          form.insertBefore(buildLoader(), form.firstChild);
          if(hasErrorAlertBeenShown()) destroyErrorAlert();
          // Fake request simulation
          setTimeout(() => {
            const response = { status: 503, message: 'Please, try again later.' };
            onSubmitError(response, form);
          }, 3000);
        }

        function onSubmitError({ message }, form){
          queryElement('[data-loader]').remove();
          queryElement('form').classList.remove('pd-form-processing');
          form.insertBefore(buildErrorAlert(message), form.firstChild);
        }

        function queryElement(selector){
          return element.querySelector(selector);
        }

        function buildLoader(){
          const loader = document.createElement('div');
          loader.setAttribute('class', 'pd-loader');
          loader.setAttribute('data-loader', '');
          return loader;
        }

        function buildErrorAlert(message){
          const alert = document.createElement('div');
          alert.setAttribute('class', 'pd-alert pd-alert-danger pd-alert-has-trigger');
          alert.setAttribute('data-alert', '');
          alert.textContent = message;
          alert.appendChild(buildErrorAlertTrigger());
          return alert;
        }

        function buildErrorAlertTrigger(){
          const trigger = document.createElement('button');
          trigger.setAttribute('class', 'pd-alert-trigger');
          trigger.setAttribute('data-alert-trigger', '');
          trigger.textContent = 'Retry';
          trigger.addEventListener('click', onSubmit);
          return trigger;
        }

        function hasErrorAlertBeenShown(){
          return queryElement('[data-alert]');
        }

        function destroyErrorAlert(){
          queryElement('[data-alert-trigger]').removeEventListener('click', onSubmit);
          queryElement('[data-alert]').remove();
        }

        init();
      },
      template: `
      <div data-form-container>
        <form class="pd-form">
          <div class="pd-form-content">
            <div class="pd-row">
              <div class="pd-col-12">
                <div class="pd-field pd-field-required">
                  <label>Name</label>
                  <input class="pd-input" name="name" required />
                </div>
              </div>
            </div>
            <div class="pd-row">
              <div class="pd-col-12">
                <div class="pd-field pd-field-required">
                  <label>Email</label>
                  <input class="pd-input" type="email" name="email" required />
                </div>
              </div>
            </div>
            <div class="pd-row">
              <div class="pd-col-6 pd-col-offset-3">
                <button class="pd-button pd-button-primary pd-button-block" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>`,
      styles
    }
  ]
};
