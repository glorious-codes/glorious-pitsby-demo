module.exports = {
  name: 'Field',
  examples: [
    {
      title: 'Default Field',
      template: `
      <div class="pd-row">
        <div class="pd-col pd-col-4">
          <div class="pd-field">
            <label>
              Email Address
            </label>
            <input class="pd-input"  name="email" type="email" />
          </div>
        </div>
      </div>`
    },
    {
      title: 'Required Field',
      template: `
      <div class="pd-row">
        <div class="pd-col pd-col-4">
          <div class="pd-field pd-field-required">
            <label>
              Email Address
            </label>
            <input class="pd-input"  name="email" type="email" />
          </div>
        </div>
      </div>`
    }
  ]
};
