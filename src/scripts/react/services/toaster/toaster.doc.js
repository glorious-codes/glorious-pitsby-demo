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
      controller: function(){
        const { Button, toaster } = reactComponents;
        const onClick = () => {
          toaster.pop({ message: 'Default Toast' });
        };

        return function(){
          return (
            <Button onClick={ onClick }>
              Default Toast
            </Button>
          );
        }
      }
    },
    {
      title: 'Theme Toast',
      controller: function(){
        const { Button, toaster } = reactComponents;
        const pop = (message, theme) => {
          toaster.pop({ message, theme })
        };

        return function(){
          return (
            <>
              <Button onClick={() => { pop('Success Toast', 'success'); }}>
                Success Toast
              </Button>
              <Button onClick={() => { pop('Danger Toast', 'danger'); }}>
                Danger Toast
              </Button>
              <Button onClick={() => { pop('Warning Toast', 'warning'); }}>
                Warning Toast
              </Button>
            </>
          );
        }
      },
      styles: '.pd-button + .pd-button { margin-left: 20px; }'
    }
  ]
};
