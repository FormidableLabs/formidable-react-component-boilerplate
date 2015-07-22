/**
 * Karma Configuration: Base.
 */
var path = require("path");

module.exports = function(config) {
  config.set({
    frameworks: ["mocha"],
    reporters: ["spec"],
    browsers: ["PhantomJS"],
    basePath: "../..", // repository root.
    files: [
      // Sinon has issues with webpack. Do global include.
      "node_modules/sinon/pkg/sinon.js",

      // Test bundle.
      "http://127.0.0.1:3001/assets/main.js"
    ],
    port: 9999,
    singleRun: true,
    client: {
      mocha: {
        ui: "bdd"
      }
    }
  });
};
