module.exports = {
  name: 'Button',
  description: 'Abstraction of a native button.',
  properties: [
    {
      name: 'theme',
      type: 'String',
      values: 'primary'
    },
    {
      name: 'type',
      type: 'String',
      values: 'submit, reset'
    },
    {
      name: 'onClick',
      type: 'Function',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Default Button',
      controller: function(){
        const { Button } = reactComponents;

        return function(){
          return (
            <Button>
              Default Button
            </Button>
          );
        }
      }
    },
    {
      title: 'Theme Button',
      controller: function(){
        const { Button } = reactComponents;

        return function(){
          return (
            <Button theme="primary">
              Pimary Button
            </Button>
          );
        }
      }
    },
    {
      title: 'Button with click listener',
      controller: function(){
        const { useState } = React;
        const { Button } = reactComponents;

        return function(){
          const [counter, setCounter] = useState(0);

          function handleCounter(){
            if(counter) {
              return (
                <div className="counter-container">
                  Button clicked { counter } { buildCounterSuffix(counter) }!
                </div>
              );
            }
          }

          function buildCounterSuffix(counter){
            return counter > 1 ? 'times' : 'time';
          }

          return (
            <>
              <Button theme="primary" onClick={ () => setCounter(counter + 1) }>
                Pimary Button
              </Button>
              { handleCounter(counter) }
            </>
          );
        }
      },
      styles: '.counter-container { margin-top: 20px; }'
    }
  ]
};
