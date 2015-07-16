var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: "demo",
  hot: true,
  stats: {colors: true}
}).listen(8080, "localhost", function (err) {
  if (err) {
    console.log(err);
  }
});