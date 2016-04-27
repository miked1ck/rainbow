var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve('./public');

var config = {
  entry: './index.js',
  output: {
    path: BUILD_DIR,
    filename: '/app_packed.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  }
};

module.exports = config;
