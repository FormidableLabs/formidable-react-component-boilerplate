"use strict";
/**
 * Webpack frontend test configuration.
 */
var path = require("path");
var _ = require("lodash");
var prodCfg = require("./webpack.config");
var meta = require("./meta");

module.exports = {
  cache: true,
  context: path.join(__dirname, "test/client"),
  entry: "./main",
  output: {
    path: __dirname,
    filename: "main.js",
    publicPath: "/assets/"
  },
  resolve: _.merge({}, prodCfg.resolve, {
    alias: {
      // Allow root import of `src/FOO` from ROOT/src.
      src: path.join(__dirname, "src"),
      component: path.join(__dirname, "src/components/", meta.FILE_NAME)
    }
  }),
  module: prodCfg.module,
  devtool: "#source-map"
};
