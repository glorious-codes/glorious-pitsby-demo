module.exports = {
  projects: [
    {
      engine: 'vanilla',
      collectDocsFrom: './src/scripts/vanilla'
    },
    {
      engine: "vue",
      collectDocsFrom: "./src/scripts/vue",
      importFrom: "./dist/vueComponents",
      libraryName: "vueComponents"
    },
    {
      engine: 'react',
      collectDocsFrom: './src/scripts/react'
    }
  ],
  outputDirectory: './docs'
};
