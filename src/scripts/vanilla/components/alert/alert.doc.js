module.exports = {
  name: 'Alert',
  examples: [
    {
      title: 'Default Alert',
      template: `
      <div class="pd-alert">
        Default Alert.
      </div>`,
    },
    {
      title: 'Theme Alert',
      description: 'You can style a alert according themes.',
      template: `
      <div>
        <div class="pd-row">
          <div class="pd-col-12">
            <div class="pd-alert pd-alert-success">
              Success Alert.
            </div>
          </div>
        </div>
        <div class="pd-row">
          <div class="pd-col-12">
            <div class="pd-alert pd-alert-danger">
              Danger Alert.
            </div>
          </div>
        </div>
      </div>`,
    },
    {
      title: 'Alert with Trigger',
      description: 'You can optionally show a button to trigger some action',
      controller: function(element){
        const retryButton = element.querySelector('button');

        retryButton.addEventListener('click', () => {
          alert('trigger clicked!');
        });
      },
      template: `
      <div class="pd-row">
        <div class="pd-col-12">
          <div class="pd-alert pd-alert-danger">
            Something went wrong. Please, try again.
            <button type="button" class="pd-alert-trigger">
              Retry
            </button>
          </div>
        </div>
      </div>`,
    }
  ]
};
