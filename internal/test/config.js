module.exports = {
  setupFiles: [
    '<rootDir>/internal/test/setup.js',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^.+\\.scss$': 'identity-obj-proxy',
    '\\.css$': '<rootDir>/src/test/mocks/styleMock.js',
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/internal/test/transformer/fileTransformer.js',
    '\\.jsx?$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  rootDir: '../../',
  roots: [
    '<rootDir>/src',
    '<rootDir>/internal',
  ],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/react',
    '<rootDir>/node_modules/react-dom',
    '<rootDir>/node_modules/fbjs',
  ],
  globals: {
    __DEV__: true,
  },
};
