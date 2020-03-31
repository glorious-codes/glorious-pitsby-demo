module.exports = {
  name: 'Button',
  description: 'Element to be used to trigger actions.',
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
      <button class="pd-button pd-button-primary">
        Primary Button
      </button>`
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
