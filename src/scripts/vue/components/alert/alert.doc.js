module.exports = {
  name: 'Alert',
  description: 'Element used to inform users about processing results or attention-required actions.',
  properties: [
    {
      name: 'theme',
      type: 'String',
      values: 'success, danger'
    },
    {
      name: 'trigger-text',
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
      </pd-alert>`,
    },
    {
      title: 'Theme Alert',
      template: `
      <div>
        <pd-row>
          <pd-col size="12">
            <pd-alert theme="success">
              Success Alert.
            </pd-alert>
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="12">
            <pd-alert theme="danger">
              Danger Alert.
            </pd-alert>
          </pd-col>
        </pd-row>
      </div>`,
    },
    {
      title: 'Alert with Default Trigger Text',
      controller: {
        methods: {
          onRetry(){
            alert('trigger clicked!');
          }
        }
      },
      template: `
      <pd-row>
        <pd-col size="12">
          <pd-alert theme="danger" :on-trigger-click="onRetry">
            Something went wrong. Please, try again.
          </pd-alert>
        </pd-col>
      </pd-row>`,
    },
    {
      title: 'Alert with Custom Trigger Text',
      controller: {
        methods: {
          onRetry(){
            alert('trigger clicked!');
          }
        }
      },
      template: `
      <pd-row>
        <pd-col size="12">
          <pd-alert theme="danger" trigger-text="Try Again" :on-trigger-click="onRetry">
            Sorry, something went wrong.
          </pd-alert>
        </pd-col>
      </pd-row>`,
    }
  ]
};
