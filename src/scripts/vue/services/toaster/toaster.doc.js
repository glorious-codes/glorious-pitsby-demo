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
      title: 'Default Toast',
      controller: {
        methods: {
          onClick(){
            const { toaster } = vueComponents;
            toaster.pop({ message: 'Default Toast' });
          }
        }
      },
      template: `
      <pd-button :onClick="onClick">
        Default Toast
      </pd-button>
      `
    },
    {
      title: 'Theme Toast',
      controller: {
        methods: {
          onClick(message, theme){
            const { toaster } = vueComponents;
            toaster.pop({ message, theme });
          }
        }
      },
      template: `
      <pd-row>
        <pd-col size="4">
          <pd-button :onClick="() => onClick('Success Toast', 'success')" block>
            Success Toast
          </pd-button>
        </pd-col>
        <pd-col size="4">
          <pd-button :onClick="() => onClick('Danger Toast', 'danger')" block>
            Danger Toast
          </pd-button>
        </pd-col>
        <pd-col size="4">
          <pd-button :onClick="() => onClick('Warning Toast', 'warning')" block>
            Warning Toast
          </pd-button>
        </pd-col>
      </pd-row>
      `
    }
  ]
};
