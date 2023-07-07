module.exports = {
  projects: [
    {
      engine: 'vue',
      collectDocsFrom: './src/scripts/vue',
      importFrom: './dist/vueComponents',
      libraryName: 'vueComponents'
    },
    {
      engine: 'react',
      collectDocsFrom: './src/scripts/react'
    },
    {
      engine: 'angular',
      collectDocsFrom: './src/scripts/angular',
      moduleName: 'angularComponents'
    },
    {
      engine: 'vanilla',
      collectDocsFrom: './src/scripts/vanilla'
    }
  ],
  colorScheme: {
    initial: 'light',
    onChange: scheme => vanillaComponents.setColorScheme(scheme)
  },
  other: [
    './dist/images/'
  ],
  outputDirectory: './docs'
};
