/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
'use strict';

module.exports = {
  extends: ['plugin:mysticatea/es2016'],
  parserOptions: {
    ecmaVersion: 2017
  },
  globals: {
    Atomics: false,
    SharedArrayBuffer: false
  },
  rules: {}
};
