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
      <button ng-click="$ctrl.popToaster()">
        Default Toaster
      </button>`
    }
  ]
};
