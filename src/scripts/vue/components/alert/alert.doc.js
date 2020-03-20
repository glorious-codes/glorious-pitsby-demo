module.exports = {
  name: 'Alert',
  description: 'Element used to inform users about processing results or attention-required actions.',
  properties: [
    {
      name: 'theme',
      type: 'String',
      values: 'success, danger'
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
          <pd-alert theme="danger" :onTriggerClick="onRetry">
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
          <pd-alert theme="danger" triggerText="Try Again" :onTriggerClick="onRetry">
            Sorry, something went wrong.
          </pd-alert>
        </pd-col>
      </pd-row>`,
    }
  ]
};
