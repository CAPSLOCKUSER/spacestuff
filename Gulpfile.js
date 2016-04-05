'use strict';

var path = require('path');

require('urbanjs-tools').initialize(require('gulp'), {
  'eslint': {
    configFile: path.join(__dirname, '/.eslintrc'),
    files: path.join(__dirname, '/src/js/*.js')
  }
});
