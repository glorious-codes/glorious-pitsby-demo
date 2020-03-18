module.exports = {
  name: 'Alert',
  description: 'Element used to inform users about processing results or attention-required actions.',
  properties: [
    {
      name: 'theme',
      type: 'String',
      values: 'success, danger'
    },
    {
      name: 'triggerText',
      type: 'String',
      values: 'any'
    },
    {
      name: 'onTriggerClick',
      type: '<void> Function',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Default Alert',
      controller: function(){
        const { Alert } = reactComponents;

        return function(){
          return (
            <Alert>
              Default Alert
            </Alert>
          );
        }
      }
    },
    {
      title: 'Theme Alert',
      controller: function(){
        const { Alert, Col, Row } = reactComponents;

        return function(){
          return (
            <>
              <Row>
                <Col size="12">
                  <Alert theme="success">
                    Success Alert
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <Alert theme="danger">
                    Danger Alert
                  </Alert>
                </Col>
              </Row>
            </>
          );
        }
      }
    },
    {
      title: 'Alert with Default Trigger Text',
      controller: function(){
        const { Alert, Col, Row } = reactComponents;

        return function(){
          const onTriggerClick = () => alert('trigger clicked!');

          return (
            <Row>
              <Col size="12">
                <Alert theme="danger" onTriggerClick={ onTriggerClick }>
                  Something went wrong. Please, try again.
                </Alert>
              </Col>
            </Row>
          );
        }
      }
    },
    {
      title: 'Alert with Custom Trigger Text',
      controller: function(){
        const { Alert, Col, Row } = reactComponents;

        return function(){
          const onTriggerClick = () => alert('trigger clicked!');

          return (
            <Row>
              <Col size="12">
                <Alert theme="danger" triggerText="Try Again" onTriggerClick={ onTriggerClick }>
                  Sorry, something went wrong.
                </Alert>
              </Col>
            </Row>
          );
        }
      }
    }
  ]
};
