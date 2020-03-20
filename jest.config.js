const project = require('./project.json');

module.exports = {
  collectCoverageFrom: project.tests.source.files,
  coverageReporters: ['html'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@vue$': 'vue/dist/vue.common.js',
    '@react\/(.*)$': `<rootDir>/${project.scripts.source.root.react}$1`,
    '@vanilla\/(.*)$': `<rootDir>/${project.scripts.source.root.vanilla}$1`,
    '@styles\/(.*)$': `<rootDir>/${project.styles.source.root}$1`
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  transform: {
    '^.+\\.styl$': '<rootDir>/src/scripts/vanilla/mocks/raw-files.js',
    '^.+\\.html$': 'html-loader-jest',
    '^.+\\.js$': 'babel-jest'
  }
};
