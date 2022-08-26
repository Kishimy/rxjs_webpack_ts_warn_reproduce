const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

process.traceDeprecation = true;
module.exports = {
  entry: [path.resolve(__dirname, "../src/index.ts")],
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        include: path.resolve(__dirname, "../public"),
        exclude: path.resolve(__dirname, "../node_modules"),
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        exclude: [
          path.resolve(__dirname, "../node_modules"),
          path.resolve(__dirname, "../dist"),
        ],
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [
      "index.js",
      "index.jsx",
      "index.ts",
      "index.ts",
      ".js",
      ".jsx",
      ".json",
      ".ts",
      ".tsx",
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};
