const { merge } = require("webpack-merge");

const common = require("./common");

module.exports = merge(common, {
  mode: "development",
  stats: "minimal",
  optimization: {
    moduleIds: "named",
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8000,
    open: false,
  },
  devtool: "eval-cheap-module-source-map",
});
