const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode);
const WebpackMerge = require("webpack-merge");

module.exports = ({ mode } = (mode = "production")) => {
  return WebpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js",
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  );
};
