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
    '@react\/(.*)$': `<rootDir>/${project.scripts.source.root.react}$1`,
    '@styles\/(.*)$': `<rootDir>/${project.styles.source.root}$1`
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/scripts/react/mocks/global.js'
  ],
  transform: {
    '^.+\\.styl$': '<rootDir>/src/scripts/base/mocks/raw-files.js',
    '^.+\\.js$': 'babel-jest'
  }
};
