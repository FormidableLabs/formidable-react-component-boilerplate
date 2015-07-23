/*
 * Karma Configuration: "full" version.
 *
 * This configuration runs a temporary `webpack-dev-server` and builds
 * the test files one-off for just a single run. This is appropriate for a
 * CI environment or if you're not otherwise running `npm run dev|hot`.
 */
module.exports = function (config) {
  // Start with the "dev" (webpack-dev-server is already running) config
  // and add in the webpack stuff.
  require("./karma.conf.dev")(config);
};
