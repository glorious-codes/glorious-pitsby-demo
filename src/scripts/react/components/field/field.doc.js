module.exports = {
  name: 'Field',
  description: 'Container for form controls like input, select etc.',
  properties: [
    {
      name: 'label',
      type: 'String',
      values: 'any',
      required: true
    }
  ],
  examples: [
    {
      title: 'Default Field',
      controller: function(){
        const { Col, Field, Input, Row } = reactComponents;

        return function(){
          return (
            <Row>
              <Col size="4">
                <Field label="Email Address">
                  <Input type="email" onChange={ () => {} } />
                </Field>
              </Col>
            </Row>
          )
        }
      }
    },
    {
      title: 'Field with Required Input',
      controller: function(){
        const { Col, Field, Input, Row } = reactComponents;

        return function(){
          return (
            <Row>
              <Col size="4">
                <Field label="Email Address">
                  <Input type="email" onChange={ () => {} } required />
                </Field>
              </Col>
            </Row>
          )
        }
      }
    }
  ]
};
