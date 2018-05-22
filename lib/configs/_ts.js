/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
'use strict';

const { merge } = require('../utils');
const moduleConfig = require('./+modules');

module.exports = {
  overrides: [
    merge({ files: ['*.ts'] }, moduleConfig, {
      parser: require.resolve('typescript-eslint-parser'),
      rules: {
        // Enabled rules
        'one-var': ['error', 'never'],
        'mysticatea/ts/adjacent-overload-signatures': 'error',
        'mysticatea/ts/class-name-casing': 'error',
        'mysticatea/ts/explicit-function-return-type': [
          'error',
          { allowExpressions: true }
        ],
        'mysticatea/ts/explicit-member-accessibility': 'error',
        'mysticatea/ts/member-naming': 'error',
        'mysticatea/ts/no-angle-bracket-type-assertion': 'error',
        'mysticatea/ts/no-array-constructor': 'error',
        'mysticatea/ts/no-empty-interface': 'error',
        'mysticatea/ts/no-explicit-any': 'error',
        'mysticatea/ts/no-inferrable-types': 'error',
        'mysticatea/ts/no-non-null-assertion': 'error',
        'mysticatea/ts/no-parameter-properties': 'error',
        'mysticatea/ts/no-triple-slash-reference': 'error',
        'mysticatea/ts/no-unused-vars': 'error',
        'mysticatea/ts/no-use-before-define': 'error',
        'mysticatea/ts/no-var-requires': 'error',
        'mysticatea/ts/prefer-namespace-keyword': 'error',

        // Disabled rules
        'func-style': 'off',
        'init-declarations': 'off',
        'lines-between-class-members': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'valid-jsdoc': 'off',
        'mysticatea/ts/interface-name-prefix': 'off',
        'mysticatea/ts/member-delimiter-style': 'off', // favor of Prettier.
        'mysticatea/ts/member-ordering': 'off',
        'mysticatea/ts/no-namespace': 'off', // I like the namespace for interfaces (type only things).
        'mysticatea/ts/no-type-alias': 'off',
        'mysticatea/ts/type-annotation-spacing': 'off' // favor of Prettier.
      },
      settings: {
        node: {
          tryExtensions: ['.ts', '.mjs', '.js', '.json', '.node']
        }
      }
    })
  ]
};
