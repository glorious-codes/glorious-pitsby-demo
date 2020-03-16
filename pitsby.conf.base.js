module.exports = {
  projects: [
    {
      engine: 'vanilla',
      collectDocsFrom: './src/scripts/vanilla'
    },
    {
      engine: 'react',
      collectDocsFrom: './src/scripts/react'
    }
  ],
  custom: {},
  outputDirectory: './docs'
};
