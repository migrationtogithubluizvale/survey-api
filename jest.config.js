module.exports = {
  roots: ['<rootdir>/src'],
  collectCoverageFrom: ['<rootdir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
