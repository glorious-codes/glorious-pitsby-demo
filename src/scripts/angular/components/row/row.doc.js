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
      name: 'data-offset',
      type: 'String',
      values: '1 to 10'
    }
  ],
  examples: [
    {
      title: 'Default Row',
      template: `
      <pd-row>
        <pd-col data-size="12">
          <p>Default Row</p>
        </pd-col>
      </pd-row>
      `,
      styles
    },
    {
      title: 'Offset Row',
      template: `
      <div>
        <pd-row>
          <pd-col data-size="12">
            <p>Default Row</p>
          </pd-col>
        </pd-row>
        <pd-row data-offset="5">
          <pd-col data-size="12">
            <p>Offset Row</p>
          </pd-col>
        </pd-row>
      </div>
      `,
      styles
    }
  ]
};
