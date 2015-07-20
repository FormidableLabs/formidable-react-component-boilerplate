/*globals __dirname:false */
/* eslint no-unused-vars:0 */
/* eslint no-var:0 */

var webpack = require("webpack");
var path = require("path");

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
    app: ["webpack/hot/dev-server", "./demo/app.js"]
  },
  stats: {
    colors: true,
    reasons: true
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
