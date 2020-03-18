module.exports = {
  name: 'Textarea',
  description: 'Abstraction of a native textarea.',
  properties: [
    {
      name: 'onChange',
      type: '<void> Function',
      values: 'any',
      required: true
    },
    {
      name: 'name',
      type: 'String',
      values: 'any',
      required: true
    },
    {
      name: 'required',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'disabled',
      type: 'Boolean',
      values: 'true/false'
    }
  ],
  examples: [
    {
      title: 'Default Textarea',
      controller: function(){
        const { useState } = React;
        const { Col, Row, Textarea } = reactComponents;

        return function(){
          const [value, setValue] = useState('');

          const onChange = ({ value }) => setValue(value);

          return (
            <>
              <Row>
                <Col size="3">
                  <Textarea name="example" onChange={ onChange }></Textarea>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  Value: { value }
                </Col>
              </Row>
            </>
          );
        }
      }
    },
    {
      title: 'Input with Initial Value',
      controller: function(){
        const { useState } = React;
        const { Col, Row, Textarea } = reactComponents;

        return function(){
          const [value, setValue] = useState('Pitsby');

          const onChange = ({ value }) => setValue(value);

          return (
            <>
              <Row>
                <Col size="3">
                  <Textarea name="example" value={ value } onChange={ onChange }></Textarea>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  Initial Value: { value }
                </Col>
              </Row>
            </>
          );
        }
      }
    },
    {
      title: 'Required Textarea',
      controller: function(){
        const { useState } = React;
        const { Button, Col, Row, Textarea } = reactComponents;

        return function(){
          const [value, setValue] = useState('');

          const onChange = ({ value }) => setValue(value);
          const onSubmit = evt => {
            evt.preventDefault();
            setValue('');
          };

          return (
            <>
              <form onSubmit={onSubmit}>
                <Row>
                  <Col size="3">
                    <Textarea name="example" onChange={ onChange } required></Textarea>
                  </Col>
                </Row>
                <Row>
                  <Col size="3">
                    <Button type="submit" theme="primary">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </form>
            </>
          );
        }
      }
    },
    {
      title: 'Disabled Textarea',
      controller: function(){
        const { useState } = React;
        const { Col, Row, Textarea } = reactComponents;

        return function(){
          const [value, setValue] = useState('');

          const onChange = ({ value }) => setValue(value);

          return (
            <Row>
              <Col size="3">
                <Textarea name="example" onChange={ onChange } disabled></Textarea>
              </Col>
            </Row>
          );
        }
      }
    }
  ]
};
