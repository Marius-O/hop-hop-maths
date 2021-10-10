// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpackConfig = require("./webpack.config");

module.exports = {
  ...webpackConfig,
  plugins: [...(webpackConfig.plugins || []), new BundleAnalyzerPlugin()],
};
