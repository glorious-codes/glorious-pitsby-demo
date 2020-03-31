module.exports = {
  name: 'Input',
  examples: [
    {
      title: 'Default Input',
      template: `
      <div class="pd-row">
        <div class="pd-col-4">
          <input type="text" class="pd-input" />
        </div>
      </div>`
    },
    {
      title: 'Disabled Input',
      template: `
      <div class="pd-row">
        <div class="pd-col-4">
          <input type="text" class="pd-input" disabled />
        </div>
      </div>`
    }
  ]
};
