const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "/script.js",
  output: {
    filename: "bundle.js",
  },
  devtools: "source-maps",
  module: {
    rules: [
      { test: /\.js?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css?$/, loader: ["style-loader", "css-loader"] },
    ],
  },
  devServer: {
    contentBase: "src",
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new Dotenv(),
  ],
};
