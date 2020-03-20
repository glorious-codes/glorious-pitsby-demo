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
            const { toaster } = vueComponents.services;
            toaster.pop({ message: 'Default Toast' });
          }
        }
      },
      template: `
      <button @click="onClick()">
        Default Toast
      </button>
      `
    }
  ]
};
