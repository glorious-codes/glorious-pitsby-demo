module.exports = {
  projects: [
    {
      engine: 'vanilla',
      collectDocsFrom: './src/scripts/vanilla'
    },
    {
      engine: 'angular',
      collectDocsFrom: './src/scripts/angular',
      moduleName: 'angularComponents'
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
