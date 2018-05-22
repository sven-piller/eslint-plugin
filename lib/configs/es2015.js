/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
'use strict';

module.exports = {
  extends: ['plugin:mysticatea/es5'],
  parserOptions: {
    ecmaVersion: 2015
  },
  globals: {
    ArrayBuffer: false,
    DataView: false,
    Float32Array: false,
    Float64Array: false,
    Int16Array: false,
    Int32Array: false,
    Int8Array: false,
    Map: false,
    Promise: false,
    Proxy: false,
    Reflect: false,
    Set: false,
    Symbol: false,
    Uint16Array: false,
    Uint32Array: false,
    Uint8Array: false,
    Uint8ClampedArray: false,
    WeakMap: false,
    WeakSet: false
  },
  rules: {
    'arrow-spacing': ['error', { before: true, after: true }],
    'generator-star-spacing': ['error', { before: true, after: true }],
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'both'],
    'no-confusing-arrow': 'off',

    // Enabled rules as errors
    'arrow-body-style': 'error',
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-new-symbol': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      { avoidExplicitReturnArrows: true }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',

    // Enabled rules as warnings
    'class-methods-use-this': 'warn',

    // Disabled rules as favor of Prettier.
    'arrow-parens': 'off',

    // Desabled rules
    'no-inner-declarations': 'off',
    'no-restricted-imports': 'off',
    'prefer-destructuring': 'off',
    'sort-imports': 'off',

    //
    // Plugins
    //

    // my own
    'mysticatea/block-scoped-var': 'off',
    'mysticatea/no-this-in-static': 'error',
    'mysticatea/no-useless-rest-spread': 'error',
    'mysticatea/prefer-for-of': 'error'
  }
};
