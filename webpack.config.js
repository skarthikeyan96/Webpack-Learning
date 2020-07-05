const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode);
const WebpackMerge = require("webpack-merge");

module.exports = ({ mode } = (mode = "production")) => {
  return WebpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 8192,
                },
              },
            ],
          },
        ],
      },
      output: {
        filename: "bundle.js",
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  );
};
