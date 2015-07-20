"use strict";

var webpack = require("webpack");
var path = require("path");

module.exports = {
  cache: true,
  debug: false,
  devtool: false,
  entry: path.join(__dirname, "src/index.js"),
  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "boilerplate-component.js"
  },

  resolve: {
    extensions: ["", ".js"]
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
