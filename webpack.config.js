'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {

  output: {
    path: __dirname,
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: false,
  devtool: false,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './demo/app.js'
  ],
  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: [/node_modules/,/dist/],
      loader: 'eslint-loader'
    }],
    loaders: [{
      loader: 'react-hot'
    },
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
