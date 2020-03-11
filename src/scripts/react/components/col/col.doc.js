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
  name: 'Column',
  description: 'Abstraction of a grid column to be used inside a row.',
  properties: [
    {
      name: 'size',
      type: 'String/Number',
      values: '1 to 12',
      required: true
    },
    {
      name: 'offset',
      type: 'String/Number',
      values: '1 to 11'
    }
  ],
  examples: [
    {
      title: 'Sized Columns',
      controller: function(){
        const { Col, Row } = reactComponents;

        return function(){
          return (
            <>
              <Row>
                <Col size="12"><p>12 cols</p></Col>
              </Row>
              <Row>
                <Col size="6"><p>6 cols</p></Col>
                <Col size="6"><p>6 cols</p></Col>
              </Row>
              <Row>
                <Col size="3"><p>3 cols</p></Col>
                <Col size="3"><p>3 cols</p></Col>
                <Col size="3"><p>3 cols</p></Col>
                <Col size="3"><p>3 cols</p></Col>
              </Row>
              <Row>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
                <Col size="1"><p>1 col</p></Col>
              </Row>
            </>
          )
        }
      },
      styles
    },
    {
      title: 'Offset Columns',
      controller: function(){
        const { Col, Row } = reactComponents;

        return function(){
          return (
            <>
              <Row>
                <Col size="6" offset="6"><p>6 cols</p></Col>
              </Row>
              <Row>
                <Col size="6"><p>6 cols</p></Col>
              </Row>
              <Row>
                <Col size="3" offset="6"><p>3 cols</p></Col>
                <Col size="1" offset="2"><p>1 col</p></Col>
              </Row>
            </>
          )
        }
      },
      styles
    },
    {
      title: 'Nested Columns',
      controller: function(){
        const { Col, Row } = reactComponents;

        return function(){
          return (
            <Row>
              <Col size="6"><p>6 cols</p></Col>
              <Col size="6">
                <Row>
                  <Col size="8"><p>8 cols</p></Col>
                  <Col size="4"><p>4 cols</p></Col>
                </Row>
                <Row>
                  <Col size="4"><p>4 cols</p></Col>
                  <Col size="4"><p>4 cols</p></Col>
                  <Col size="4"><p>4 cols</p></Col>
                </Row>
              </Col>
            </Row>
          )
        }
      },
      styles
    },
  ],
};
