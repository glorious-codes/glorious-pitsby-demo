module.exports = {
  name: 'Loader',
  description: 'Element to be used as visual indicator of something under processing.',
  examples: [
    {
      title: 'Default Loader',
      controller: function(){
        const { Loader } = reactComponents;

        return function(){
          return (
            <Loader />
          )
        }
      }
    }
  ]
};
