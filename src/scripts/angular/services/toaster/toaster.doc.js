module.exports = {
  name: 'Toaster',
  description: '',
  methods: [
    {
      name: 'pop({ message, theme })',
      params: [
        {
          name: 'message',
          type: 'String',
          description: 'Message to be displayed.',
          values: 'Any',
          required: true
        },
        {
          name: 'theme',
          type: 'String',
          description: 'Toast\'s theme.',
          values: 'danger, success, warning'
        }
      ]
    }
  ],
  examples: [
    {
      title: 'Default Toaster',
      controller: function(toaster){
        const $ctrl = this;
        $ctrl.popToaster = () => toaster.pop({ message: 'Default Toaster' });
      },
      dependencies: ['toaster'],
      template: `
      <pd-button on-click="$ctrl.popToaster">
        Default Toaster
      </pd-button>`
    },
    {
      title: 'Theme Toast',
      controller: function(toaster){
        const $ctrl = this;

        $ctrl.popSuccess = () => {
          popToast('Success Toast', 'success')
        };

        $ctrl.popDanger = () => {
          popToast('Danger Toast', 'danger')
        };

        $ctrl.popWarning = () => {
          popToast('Warning Toast', 'warning')
        };

        function popToast(message, theme){
          toaster.pop({ message, theme });
        }
      },
      dependencies: ['toaster'],
      template: `
      <p-row>
        <pd-col data-size="4">
          <pd-button
            on-click="$ctrl.popSuccess"
            data-toast-theme="success"
            data-block="true">
            Success Toast
          </pd-button>
        </pd-col>
        <pd-col data-size="4">
          <pd-button
            on-click="$ctrl.popDanger"
            data-block="true">
            Danger Toast
          </pd-button>
        </pd-col>
        <pd-col data-size="4">
          <pd-button
            on-click="$ctrl.popWarning"
            data-block="true">
            Warning Toast
          </pd-button>
        </pd-col>
      </p-row>
      `
    }
  ]
};
