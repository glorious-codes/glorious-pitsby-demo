module.exports = {
  name: 'Tag',
  description: 'A small and colorful resource to label elements.',
  properties: [
    {
      name: 'theme',
      type: 'String',
      values: 'success, danger, warning'
    }
  ],
  examples: [
    {
      title: 'Default Tag',
      controller: function(){
        const { Tag } = reactComponents;

        return function(){
          return (
            <Tag>
              Default Tag
            </Tag>
          );
        }
      }
    },
    {
      title: 'Theme Tag',
      controller: function(){
        const { Col, Row, Tag } = reactComponents;

        return function(){
          return (
            <>
            <Row>
              <Col size="12">
                <Tag theme="danger">
                  Danger Tag
                </Tag>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <Tag theme="success">
                  Success Tag
                </Tag>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <Tag theme="warning">
                  Warning Tag
                </Tag>
              </Col>
            </Row>
            </>
          );
        }
      }
    }
  ]
};
