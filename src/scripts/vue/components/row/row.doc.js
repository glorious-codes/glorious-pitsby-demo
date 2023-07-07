const styles = `
[class*=col] p {
  padding: 0 10px;
  background-color: var(--color-blue-lighter);
  color: var(--color-blue);
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
      type: 'String/Number',
      values: '1 to 10'
    }
  ],
  examples: [
    {
      title: 'Default Row',
      template: `
      <pd-row>
        <pd-col size="12">
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
          <pd-col size="12">
            <p>Default Row</p>
          </pd-col>
        </pd-row>
        <pd-row offset="5">
          <pd-col size="12">
            <p>Offset Row</p>
          </pd-col>
        </pd-row>
      </div>
      `,
      styles
    }
  ]
};
