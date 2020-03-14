module.exports = {
  name: 'Tag',
  description: 'A small and colorful resource to label elements.',
  properties: [
    {
      name: 'theme',
      type: 'String',
      values: 'success, danger, warning'
    }
  ],
  examples: [
    {
      title: 'Default Tag',
      controller: function(){
        const { Tag } = reactComponents;

        return function(){
          return (
            <Tag>
              Default Tag
            </Tag>
          );
        }
      }
    },
    {
      title: 'Theme Tag',
      controller: function(){
        const { Tag } = reactComponents;

        return function(){
          return (
            <>
              <Tag theme="danger">
                Danger Tag
              </Tag>
              <Tag theme="success">
                Success Tag
              </Tag>
              <Tag theme="warning">
                Warning Tag
              </Tag>
            </>
          );
        }
      },
      styles: '.pd-tag + .pd-tag { margin-left: 20px; }'
    }
  ]
};
