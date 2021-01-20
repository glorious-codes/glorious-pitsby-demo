const styles = '[data-form-container] { margin: 0 auto; max-width: 320px; }';

module.exports = {
  name: 'Form',
  description: 'Abstraction of a native form.',
  properties: [
    {
      name: 'onSubmit',
      type: '<Promise> Function',
      values: 'any',
      required: true
    },
    {
      name: 'onSubmitSuccess',
      type: '<void> Function',
      values: 'any'
    },
    {
      name: 'onSubmitError',
      type: '<void> Function',
      values: 'any'
    },
    {
      name: 'successMessage',
      type: 'String',
      values: 'any'
    },
    {
      name: 'errorMessage',
      type: 'String',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Successful Form with Custom Success Message',
      controller: function(){
        const { useState } = React;
        const { Button, Col, Field, Form, Input, Row, Textarea } = reactComponents;

        return function(){
          const initialData = { name: '', email: '', message: '' };
          const [data, setData] = useState(initialData);

          const onDataChange = ({ target: { name, value } }) => {
            setData({...data, [name]: value});
          };

          const onSubmit = () => {
            // Fake request simulation
            return new Promise((resolve) => {
              const response = { status: 200, message: 'ok' };
              setTimeout(() => resolve(response), 3000);
            });
          };

          const onSubmitSuccess = response => {
            // Here's where you handle server response
            setData(initialData);
          };

          return (
            <div data-form-container>
              <Form
                onSubmit={onSubmit}
                onSubmitSuccess={onSubmitSuccess}
                successMessage="Success! Your message has been sent."
              >
                <Row>
                  <Col size="12">
                    <Field label="Name">
                      <Input name="name" value={data.name} onChange={onDataChange} required />
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col size="12">
                    <Field label="Email">
                      <Input type="email" name="email" value={data.email} onChange={onDataChange} required />
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col size="12">
                    <Field label="Message">
                      <Textarea name="message" value={data.message} onChange={onDataChange} required />
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col size="6">
                    <Button type="submit" theme="primary" block>Send</Button>
                  </Col>
                  <Col size="6">
                    <Button type="reset" block>Clear</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          );
        }
      },
      styles
    },
    {
      title: 'Failing Form with Custom Error Message',
      controller: function(){
        const { useState } = React;
        const { Button, Col, Field, Form, Input, Row } = reactComponents;

        return function(){
          const [data, setData] = useState({});

          const onDataChange = ({ target: { name, value } }) => {
            setData({...data, [name]: value});
          };

          const onSubmit = () => {
            // Fake request simulation
            return new Promise((resolve, reject) => {
              const response = { status: 500, message: 'Internal Server Error' };
              setTimeout(() => reject(response), 3000);
            });
          };

          const onSubmitError = err => {
            // Here's where you handle server error
            console.log(err);
          };

          return (
            <div data-form-container>
              <Form
                onSubmit={onSubmit}
                onSubmitError={onSubmitError}
                errorMessage="Ops, request failed."
              >
                <Row>
                  <Col size="12">
                    <Field label="Name">
                      <Input name="name" onChange={onDataChange} required />
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col size="12">
                    <Field label="Email">
                      <Input type="email" name="email" onChange={onDataChange} required />
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col size="6" offset="3">
                    <Button type="submit" theme="primary" block>Subscribe</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          );
        }
      },
      styles
    }
  ]
};
