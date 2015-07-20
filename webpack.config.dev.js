"use strict";

var _ = require("lodash");
var webpack = require("webpack");
var base = require("./webpack.config");

module.exports = _.merge({}, _.omit(base, "plugins"), {
  output: {
    filename: "boilerplate-component.js"
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin("boilerplate-component.js.map")
  ]
});
