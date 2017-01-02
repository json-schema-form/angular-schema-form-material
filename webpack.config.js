/* global __dirname */
/**
* NOTE in order to build with angular-schema-form you must
* have it cloned as a sibling directory to this one or npm
* installed with the version you wish to build with.
*/
const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');
const buildDate = new Date();
console.log('Angular Schema Form Material v' + package.version);
const plugins = [
  new webpack.BannerPlugin(
    'angular-schema-form-material\n' +
    '@version ' + package.version + '\n' +
    '@date ' + buildDate.toUTCString() + '\n' +
    '@link https://github.com/json-schema-form/angular-schema-form-material\n' +
    '@license MIT\n' +
    'Copyright (c) 2014-' + buildDate.getFullYear() + ' JSON Schema Form'),
  /* Minification only occurs if the output is named .min */
  new webpack.optimize.UglifyJsPlugin(
    {
      include: /\.min\.js$/,
      minimize: true
    })
];

module.exports = {
  entry: {
    'angular-schema-form-material': [ path.join(__dirname, 'src', 'module') ],
    'angular-schema-form-material-bundled': [ 'angular-schema-form', path.join(__dirname, 'src', 'module') ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      path.join(__dirname, "src", "material"),
      path.join(__dirname, "..", "angular-schema-form", "dist"),
      'node_modules',
    ],
    extensions: [ '.js', '.html' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [ "es2015", { "modules": false }]
            ]
          }
        }],
        exclude: /(node_modules|angular-schema-form)/
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'ngtemplate-loader',
          options: {
            relativeTo: path.join(__dirname, 'src')
          }
        }, 'html-loader'],
        exclude: /(index)/
      }
    ]
  },
  externals: {
    'angular': 'var angular',
    'tv4': 'var tv4',
    'bundle!angular-schema-form': 'commonjs angular-schema-form'
  },
  plugins: plugins
};
