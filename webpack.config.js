const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback:{
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"./dist"),
  },
};