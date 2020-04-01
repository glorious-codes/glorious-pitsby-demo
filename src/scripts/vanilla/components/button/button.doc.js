module.exports = {
  name: 'Button',
  examples: [
    {
      title: 'Default Button',
      template: `
      <button class="pd-button">
        Default Button
      </button>`
    },
    {
      title: 'Theme Button',
      description: 'You can style a button according themes.',
      template: `
      <div class="pd-row">
        <div class="pd-col-3">
          <button class="pd-button pd-button-primary">
            Primary Button
          </button>
        </div>
        <div class="pd-col-3">
          <button class="pd-button pd-button-secondary">
            Secondary Button
          </button>
        </div>
      </div>`
    },
    {
      title: 'Disabled Button',
      template: `
      <div class="pd-row">
        <div class="pd-col-3">
          <button class="pd-button" disabled>
            Default Button
          </button>
        </div>
        <div class="pd-col-3">
          <button class="pd-button pd-button-primary" disabled>
            Primary Button
          </button>
        </div>
        <div class="pd-col-3">
          <button class="pd-button pd-button-secondary" disabled>
            Secondary Button
          </button>
        </div>
      </div>`
    },
    {
      title: 'Block Button',
      description: 'You can make a button behavior as block.',
      template: `
      <button class="pd-button pd-button-block">
        Block Button
      </button>`
    }
  ]
};
