/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // transforma arquivos .js, .jsx, .ts e .tsx usando Babel
  },
};

module.exports = config;