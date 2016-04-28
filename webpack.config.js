var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: [ './src/index.js', './src/index.less', ],
  output: { path: './src/public/', filename: 'index.packed.js' },
  module : {
    loaders : [
      { test : /\.js?/, loader: 'babel-loader', query: { presets: ['es2015', 'react', 'stage-2'] } },
      { test: /\.json$/, loader: 'json' },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
    ]
  },
  plugins: [ new ExtractTextPlugin("index.packed.css", { allChunks: true }) ]
};

module.exports = config;
