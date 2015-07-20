"use strict";

var webpack = require("webpack");
var path = require("path");

module.exports = {
  cache: true,
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
    filename: "boilerplate-component.min.js",
    library: "BoilerplateComponent",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: "babel-loader?stage=0"
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        // Signal production mode for React JS and other libs.
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.SourceMapDevToolPlugin("boilerplate-component.min.js.map")
  ]
};
