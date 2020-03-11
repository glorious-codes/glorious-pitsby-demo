const styles = `
[class*=col] p {
  padding: 0 10px;
  background-color: #E5EFFF;
  color: #3282E1;
  text-align: center;
  line-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
}`;

module.exports = {
  name: 'Row',
  description: 'A container for grid columns.',
  properties: [
    {
      name: 'offset',
      type: 'String',
      values: '1 to 10'
    }
  ],
  examples: [
    {
      title: 'Default Row',
      controller: function(){
        const { Col, Row } = reactComponents;

        return function(){
          return (
            <Row>
              <Col size="12">
                <p>Default Row</p>
              </Col>
            </Row>
          );
        }
      },
      styles
    },
    {
      title: 'Offset Row',
      controller: function(){
        const { Col, Row } = reactComponents;

        return function(){
          return (
            <>
              <Row>
                <Col size="12">
                  <p>Row</p>
                </Col>
              </Row>
              <Row offset="5">
                <Col size="12">
                  <p>Offset Row</p>
                </Col>
              </Row>
            </>
          );
        }
      },
      styles
    }
  ]
};
