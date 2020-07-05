const miniCSSExtractPlugin = require("mini-css-extract-plugin");
const { loader } = require("mini-css-extract-plugin");

module.exports = () => ({
  output: {
    filename: "[chunkHash].js",
  },
  plugins: [new miniCSSExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCSSExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
