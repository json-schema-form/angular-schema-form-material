/* global __dirname */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getPath = (pathToFile) => path.resolve(__dirname, pathToFile);
const pjson = require('./package.json');
console.log('Angular Schema Form Material v' + pjson.version);

module.exports = {
  entry: './src/module.js',
  output: {
    path: getPath('./dist'),
    filename: 'angular-schema-form-material.js',
    sourceMapFilename: '[name].map',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: [
      'node_modules', 'src'
    ],
    extensions: [ '', '.js', '.html' ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [ path.join(__dirname, 'src') ],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + path.join(__dirname, 'src') + '/!html',
        exclude: /(index)/
      }
    ]
  },
  externals: {
    'angular': 'var angular',
    'tv4': 'var tv4',
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin({}),
    new webpack.optimize.OccurenceOrderPlugin(true),
    // new HtmlWebpackPlugin({
    //   template: 'html!./src/index.html'
    // }),
    new webpack.BannerPlugin(
      'angular-schema-form-material\n' +
      '@version ' +
      pjson.version + '\n' +
      '@link https://github.com/json-schema-form/angular-schema-form-material\n' +
      '@license MIT\n' +
      'Copyright (c) 2016 JSON Schema Form')
  ]
};
