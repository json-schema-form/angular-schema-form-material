const config = require('./webpack.config.js');
const path = require('path');

config.entry = {
  'angular-schema-form-material': [ path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-material-bundled': [ 'angular-schema-form', path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-material.min': [ path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-material-bundled.min': [ 'angular-schema-form', path.join(__dirname, 'src', 'module') ],
}

module.exports = config;
