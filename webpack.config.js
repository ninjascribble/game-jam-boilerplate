const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/scripts/index.ts",
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    new HtmlWebpackPlugin({ title: 'Turn-based roguelike' })
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
