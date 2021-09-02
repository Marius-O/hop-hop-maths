module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  globals: {
    "ts-jest": {},
  },
  coverageDirectory: "./coverage/",
};
