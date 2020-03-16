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
      controller: function(element){
        const { toaster } = vanillaComponents;

        element.addEventListener('click', () => {
          toaster.pop({ message: 'Default Toast' });
        });
      },
      template: `
      <button type="button">Pop Toast</button>
      `
    },
    {
      title: 'Theme Toast',
      controller: function(element){
        const { toaster } = vanillaComponents;
        const buttons = element.querySelectorAll('button');

        function onButtonClick({ target }){
          toaster.pop({
            message: target.textContent,
            theme: target.getAttribute('data-theme')
          });
        }

        buttons.forEach(button => element.addEventListener('click', onButtonClick));
      },
      template: `
      <div>
        <button type="button" data-theme="danger">Danger Toast</button>
        <button type="button" data-theme="success">Success Toast</button>
        <button type="button" data-theme="warning">Warning Toast</button>
      </div>
      `
    }
  ]
};
