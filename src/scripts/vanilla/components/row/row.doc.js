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
  examples: [
    {
      title: 'Default Row',
      template: `
      <div class="pd-row">
        <div class="pd-col-12">
          <p>Default Row</p>
        </div>
      </div>`,
      styles
    },
    {
      title: 'Offset Row',
      description: 'You can vertically offset a row using offset css class from "pd-row-offset-1" to "pd-row-offset-10".',
      template: `
      <div>
        <div class="pd-row">
          <div class="pd-col pd-col-12">
            <p>Default Row</p>
          </div>
        </div>
        <div class="pd-row pd-row-offset-5">
          <div class="pd-col pd-col-12">
            <p>Offset Row</p>
          </div>
        </div>
      </div>`,
      styles
    }
  ]
};
