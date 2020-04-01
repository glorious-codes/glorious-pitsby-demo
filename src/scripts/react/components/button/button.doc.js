module.exports = {
  name: 'Button',
  description: 'Abstraction of a native button.',
  properties: [
    {
      name: 'type',
      type: 'String',
      values: 'submit, reset'
    },
    {
      name: 'theme',
      type: 'String',
      values: 'primary, secondary'
    },
    {
      name: 'block',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'disabled',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'onClick',
      type: '<void> Function',
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
        const { Col, Button, Row } = reactComponents;

        return function(){
          return (
            <Row>
              <Col size="3">
                <Button theme="primary">
                  Primary Button
                </Button>
              </Col>
              <Col size="3">
                <Button theme="secondary">
                  Secondary Button
                </Button>
              </Col>
            </Row>
          );
        }
      }
    },
    {
      title: 'Disabled Button',
      controller: function(){
        const { Col, Button, Row } = reactComponents;

        return function(){
          return (
            <Row>
              <Col size="3">
                <Button disabled>
                  Default Button
                </Button>
              </Col>
              <Col size="3">
                <Button theme="primary" disabled>
                  Primary Button
                </Button>
              </Col>
              <Col size="3">
                <Button theme="secondary" disabled>
                  Secondary Button
                </Button>
              </Col>
            </Row>
          );
        }
      }
    },
    {
      title: 'Block Button',
      controller: function(){
        const { Button } = reactComponents;

        return function(){
          return (
            <Button block>
              Block Button
            </Button>
          );
        }
      }
    },
    {
      title: 'Button with click listener',
      controller: function(){
        const { useState } = React;
        const { Button, Col, Row } = reactComponents;

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
              <Row>
                <Col size="12">
                  <Button theme="primary" onClick={ () => setCounter(counter + 1) }>
                    Primary Button
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  { handleCounter(counter) }
                </Col>
              </Row>
            </>
          );
        }
      }
    }
  ]
};
