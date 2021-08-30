const path = require("path");
const webpackConfig = require("./webpack.config");

module.exports = {
  ...webpackConfig,
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"),
    },
  },
};
