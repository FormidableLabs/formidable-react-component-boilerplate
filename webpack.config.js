"use strict";

var webpack = require("webpack");
var path = require("path");

// Set up shared config to reuse in other configurations.
var _CONFIG = {
  FILE_NAME: "boilerplate-component",
  LIB_NAME: "BoilerplateComponent"
};

module.exports = {
  _CONFIG: _CONFIG, // Proxy configuration for later imports.
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
    filename: _CONFIG.FILE_NAME + ".min.js",
    library: _CONFIG.LIB_NAME,
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
      // Signal production, so that webpack removes non-production code that
      // is in condtionals like: `if (process.env.NODE_ENV === "production")`
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.SourceMapDevToolPlugin("[file].map")
  ]
};
