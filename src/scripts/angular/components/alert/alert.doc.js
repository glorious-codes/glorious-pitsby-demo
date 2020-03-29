module.exports = {
  name: 'Alert',
  description: 'Element used to inform users about processing results or attention-required actions.',
  properties: [
    {
      name: 'data-theme',
      type: 'String',
      values: 'success, danger'
    },
    {
      name: 'data-trigger-text',
      type: 'String',
      values: 'any'
    },
    {
      name: 'on-trigger-click',
      type: '<void> Function',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Default Alert',
      template: `
      <pd-alert>
        Default Alert.
      </pd-alert>`
    },
    {
      title: 'Theme Alert',
      template: `
      <div>
        <pd-row>
          <pd-col data-size="12">
            <pd-alert data-theme="success">
              Success Alert.
            </pd-alert>
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="12">
            <pd-alert data-theme="danger">
              Danger Alert.
            </pd-alert>
          </pd-col>
        </pd-row>
      </div>`
    },
    {
      title: 'Alert with Default Trigger Text',
      controller: function($window){
        const $ctrl = this;

        $ctrl.onRetry = () => $window.alert('trigger clicked!');
      },
      dependencies: ['$window'],
      template: `
      <pd-row>
        <pd-col data-size="12">
          <pd-alert data-theme="danger" on-trigger-click="$ctrl.onRetry">
            Something went wrong. Please, try again.
          </pd-alert>
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Alert with Custom Trigger Text',
      controller: function($window){
        const $ctrl = this;

        $ctrl.onRetry = () => $window.alert('trigger clicked!');
      },
      dependencies: ['$window'],
      template: `
      <pd-row>
        <pd-col data-size="12">
          <pd-alert
            data-theme="danger"
            data-trigger-text="Try Again"
            on-trigger-click="$ctrl.onRetry">
            Sorry, something went wrong.
          </pd-alert>
        </pd-col>
      </pd-row>`
    }
  ]
};
