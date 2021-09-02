const base = require("./jest.config.base");

module.exports = {
  ...base,
  roots: ["<rootDir>"],
  projects: ["<rootDir>/src/app", "<rootDir>/src/packages/*"],
};
