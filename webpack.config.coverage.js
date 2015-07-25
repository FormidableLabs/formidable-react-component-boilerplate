"use strict";
/**
 * Webpack frontend test (w/ coverage) configuration.
 */
var _ = require("lodash");
var testCfg = require("./webpack.config.test");

module.exports = _.merge({}, testCfg, {
  module: {
    postLoaders: [
      // Manually instrument client code for code coverage.
      {
        test: /src\/.*\.jsx?$/,
        exclude: /(test|node_modules)\//,
        loader: "istanbul-instrumenter"
      }
    ]
  }
});
