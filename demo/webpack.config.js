/*globals __dirname:false */
"use strict";

var webpack = require("webpack");

module.exports = {

  output: {
    path: __dirname,
    filename: "main.js",
    publicPath: "/assets/"
  },

  cache: true,
  debug: false,
  devtool: false,
  entry: {
    // TODO: Make "dev" and "hot" different versions.
    app: ["webpack/hot/dev-server", "demo/app.jsx"]
  },
  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|jpg)$/,
      loader: "url-loader?limit=8192"
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
