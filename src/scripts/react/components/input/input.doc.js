module.exports = {
  name: 'Input',
  description: 'Abstraction of a native input.',
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
      name: 'type',
      type: 'String',
      values: 'submit, reset'
    },
    {
      name: 'value',
      type: 'String/Number',
      values: 'any'
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
      title: 'Default Input',
      controller: function(){
        const { useState } = React;
        const { Col, Input, Row } = reactComponents;

        return function(){
          const [value, setValue] = useState('');

          const onChange = ({ value }) => setValue(value);

          return (
            <>
              <Row>
                <Col size="3">
                  <Input name="example" onChange={ onChange } />
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
        const { Col, Input, Row } = reactComponents;

        return function(){
          const [value, setValue] = useState('Pitsby');

          const onChange = ({ value }) => setValue(value);

          return (
            <>
              <Row>
                <Col size="3">
                  <Input name="example" value={ value } onChange={ onChange } />
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
      title: 'Required Input',
      controller: function(){
        const { useState } = React;
        const { Button, Col, Input, Row } = reactComponents;

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
                    <Input name="example" value={value} onChange={ onChange } required />
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
      title: 'Disabled Input',
      controller: function(){
        const { useState } = React;
        const { Col, Input, Row } = reactComponents;

        return function(){
          const [value, setValue] = useState('');

          const onChange = ({ value }) => setValue(value);

          return (
            <Row>
              <Col size="3">
                <Input name="example" onChange={ onChange } disabled />
              </Col>
            </Row>
          );
        }
      }
    }
  ]
};
