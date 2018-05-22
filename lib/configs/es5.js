/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
'use strict';

const { merge } = require('../utils');
const tsConfig = require('./_ts');
const mochaConfig = require('./_mocha');
const specialConfig = require('./_special');

module.exports = merge(
  {
    root: true,
    plugins: ['mysticatea'],
    parserOptions: {
      ecmaVersion: 5,
      sourceType: 'script'
    },
    globals: {
      Intl: false,
      clearInterval: false,
      clearTimeout: false,
      console: false,
      setInterval: false,
      setTimeout: false
    },
    rules: {
      // ########### Own rules ###########
      'brace-style': ['error', '1tbs', { allowSingleLine: true }], // enforce one true brace style (off by default)
      'block-scoped-var': 'warn', // treat var statements as if they were block scoped (off by default)
      camelcase: 'warn', // require camel case names
      complexity: ['warn', { max: 30 }],
      'func-names': ['warn', 'as-needed'], // require function expressions to have a name (off by default)
      'max-len': [
        'warn',
        120,
        {
          ignoreComments: true,
          ignoreTrailingComments: true
        }
      ], // enforce a maximum line length
      'max-statements': ['warn', 25], // enforce a statement length
      'no-console': ['warn', { allow: ['assert', 'error'] }],
      'no-extra-semi': 'error',
      'no-irregular-whitespace': [
        'error',
        {
          skipComments: false,
          skipRegExps: false,
          skipStrings: false,
          skipTemplates: false
        }
      ],
      'no-multi-spaces': ['warn', { ignoreEOLComments: true }], // disallow use of multiple spaces
      'no-warning-comments': 'warn', // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
      'prefer-object-spread': 'off',
      'space-before-function-paren': [
        'warn',
        {
          anonymous: 'always',
          named: 'never'
        }
      ], // Require or disallow a space before function parenthesis
      'no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_(?:[^_].*)?$',
          caughtErrors: 'all',
          vars: 'all',
          varsIgnorePattern: '^_(?:[^_].*)?$',
          ignoreRestSiblings: true
        }
      ],
      semi: ['error', 'always'],
      'spaced-comment': [
        'error',
        'always',
        {
          block: {
            balanced: true,
            markers: [
              '*package',
              '!',
              ',',
              ':',
              '::',
              'flow-include',
              'eslint',
              'eslint-env',
              'eslint-disable',
              'eslint-enable',
              'exported',
              'globals',
              'istanbul'
            ],
            exceptions: ['*']
          },
          line: {
            exceptions: ['-', '=', '#'],
            markers: [
              '*package',
              '!',
              '/',
              ',',
              '=',
              'eslint-disable-line',
              'eslint-disable-next-line',
              'istanbul',
              'TODO:',
              'FIXME:'
            ]
          }
        }
      ],
      'valid-jsdoc': [
        'error',
        {
          prefer: { return: 'returns' },
          preferType: {
            Boolean: 'boolean',
            Function: 'function',
            Number: 'number',
            Object: 'object',
            String: 'string',
            Symbol: 'symbol'
          },
          requireReturn: true
        }
      ],

      // ########### STANDARDJS ###########

      // Enabled rules
      'accessor-pairs': 'error',
      'array-callback-return': 'error',
      'block-spacing': ['error', 'always'],
      'comma-dangle': [
        'error',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }
      ],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'consistent-return': 'error',
      curly: ['error', 'multi-line'],
      'dot-location': ['error', 'property'],
      'eol-last': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'func-call-spacing': ['error', 'never'],
      'handle-callback-err': ['error', '^(err|error)$'],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false
        }
      ],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'new-cap': ['error', { newIsCap: true, capIsNew: false }],
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-caller': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-parens': ['error', 'functions'],
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-inner-declarations': ['error', 'functions'],
      'no-invalid-regexp': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-mixed-operators': [
        'error',
        {
          groups: [
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof']
          ],
          allowSamePrecedence: true
        }
      ],
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-str': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-require': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-path-concat': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-return-assign': ['error', 'except-parens'],
      'no-return-await': 'error',
      'no-self-assign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-tabs': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true
        }
      ],
      'no-use-before-define': [
        'error',
        { functions: false, classes: false, variables: false }
      ],
      'no-useless-call': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-whitespace-before-property': 'error',
      'no-with': 'error',
      'object-property-newline': [
        'error',
        { allowMultiplePropertiesPerLine: true }
      ],
      'one-var': [
        'error',
        {
          initialized: 'never',
          uninitialized: 'always'
        }
      ],
      'operator-linebreak': [
        'error',
        'after',
        { overrides: { '?': 'before', ':': 'before' } }
      ],
      'padded-blocks': [
        'error',
        { blocks: 'never', switches: 'never', classes: 'never' }
      ],
      'prefer-promise-reject-errors': 'error',
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true }
      ],
      'semi-spacing': ['error', { before: false, after: true }],
      'space-before-blocks': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'template-tag-spacing': ['error', 'never'],
      'unicode-bom': ['error', 'never'],
      'use-isnan': 'error',
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
      yoda: ['error', 'never', { exceptRange: true }],

      // ########### mysticatea/eslint-plugin ###########

      // Enabled rules as errors.
      'default-case': 'error',
      'dot-notation': 'error',
      'for-direction': 'error',
      'func-style': ['error', 'declaration'],
      'getter-return': 'error',
      'init-declarations': 'error',
      'linebreak-style': ['error', 'unix'],
      'lines-between-class-members': 'error',
      'max-classes-per-file': 'error',
      'max-statements-per-line': ['error', { max: 1 }],
      'multiline-comment-style': ['error', 'separate-lines'],
      'no-alert': 'error',
      'no-case-declarations': 'error',
      'no-catch-shadow': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-invalid-this': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-process-env': 'error',
      'no-process-exit': 'error',
      'no-prototype-builtins': 'error',
      'no-restricted-properties': [
        'error',
        { property: '__count__' },
        { property: '__noSuchMethod__' },
        { property: '__parent__' },
        { property: '__defineGetter__' },
        { property: '__defineSetter__' },
        { property: '__lookupGetter__' },
        { property: '__lookupSetter__' }
      ],
      'no-script-url': 'error',
      'no-shadow': ['error', { builtinGlobals: true }],
      'no-unused-labels': 'error',
      'no-useless-concat': 'error',
      'no-void': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: '*', prev: 'directive' },
        { blankLine: 'always', next: 'function', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'function' }
      ],
      radix: 'error',
      'require-await': 'error',
      'require-jsdoc': [
        'error',
        {
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            FunctionDeclaration: true,
            MethodDefinition: true
          }
        }
      ],
      strict: ['error', 'global'],

      // Enabled rules as warnings.
      'max-nested-callbacks': ['warn', { max: 4 }],
      'max-params': ['warn', { max: 8 }],

      // Disabled rules as favor of Prettier.
      'array-bracket-newline': 'off',
      'array-bracket-spacing': 'off',
      'array-element-newline': 'off',
      'arrow-parens': 'off',
      'computed-property-spacing': 'off',
      'function-paren-newline': 'off',
      'implicit-arrow-linebreak': 'off',
      'jsx-quotes': 'off',
      'multiline-ternary': 'off',
      'newline-per-chained-call': 'off',
      'no-floating-decimal': 'off',
      'nonblock-statement-body-position': 'off',
      'object-curly-newline': 'off',
      'object-curly-spacing': 'off',
      'one-var-declaration-per-line': 'off',
      'quote-props': 'off',
      'semi-style': 'off',
      'switch-colon-spacing': 'off',
      'wrap-regex': 'off',

      // Disabled rules
      'arrow-body-style': 'off',
      'callback-return': 'off',
      'capitalized-comments': 'off',
      'class-methods-use-this': 'off',
      'consistent-this': 'off',
      'func-name-matching': 'off',
      'global-require': 'off',
      'guard-for-in': 'off',
      'id-blacklist': 'off',
      'id-length': 'off',
      'id-match': 'off',
      'line-comment-position': 'off',
      'lines-around-comment': 'off',
      'max-depth': 'off',
      'max-lines': 'off',
      'no-await-in-loop': 'off',
      'no-bitwise': 'off',
      'no-buffer-constructor': 'off',
      'no-confusing-arrow': 'off',
      'no-const-assign': 'off',
      'no-continue': 'off',
      'no-duplicate-imports': 'off',
      'no-eq-null': 'off',
      'no-inline-comments': 'off',
      'no-magic-numbers': 'off',
      'no-mixed-requires': 'off',
      'no-multi-assign': 'off',
      'no-negated-condition': 'off',
      'no-nested-ternary': 'off',
      'no-plusplus': 'off',
      'no-restricted-globals': 'off',
      'no-restricted-imports': 'off',
      'no-restricted-modules': 'off',
      'no-restricted-syntax': 'off',
      'no-sync': 'off',
      'no-ternary': 'off',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-var': 'off',
      'object-shorthand': 'off',
      'operator-assignment': 'off',
      'prefer-arrow-callback': 'off',
      'prefer-const': 'off',
      'prefer-destructuring': 'off',
      'prefer-numeric-literals': 'off',
      'prefer-rest-params': 'off',
      'prefer-spread': 'off',
      'prefer-template': 'off',
      'require-yield': 'off',
      'sort-imports': 'off',
      'sort-keys': 'off',
      'sort-vars': 'off',
      'vars-on-top': 'off',

      // deprecated
      // "no-negated-in-lhs": "error",

      // ES2015 rules
      'arrow-spacing': 'off',
      'constructor-super': 'off',
      'generator-star-spacing': 'off',
      'no-class-assign': 'off',
      'no-dupe-class-members': 'off',
      'no-new-symbol': 'off',
      'no-this-before-super': 'off',
      'no-useless-computed-key': 'off',
      'no-useless-constructor': 'off',
      'no-useless-rename': 'off',
      'rest-spread-spacing': 'off',
      'symbol-description': 'off',
      'template-curly-spacing': 'off',
      'yield-star-spacing': 'off',

      //
      // Plugins
      //

      // eslint-comments
      'mysticatea/eslint-comments/disable-enable-pair': 'error',
      'mysticatea/eslint-comments/no-aggregating-enable': 'error',
      'mysticatea/eslint-comments/no-duplicate-disable': 'error',
      'mysticatea/eslint-comments/no-restricted-disable': 'off',
      'mysticatea/eslint-comments/no-unlimited-disable': 'error',
      'mysticatea/eslint-comments/no-unused-disable': 'error',
      'mysticatea/eslint-comments/no-unused-enable': 'error',
      'mysticatea/eslint-comments/no-use': [
        'error',
        {
          allow: [
            'eslint-disable',
            'eslint-disable-line',
            'eslint-disable-next-line',
            'eslint-enable',
            'eslint-env',
            'globals'
          ]
        }
      ],

      // my own (mysticatea/eslint-plugin)
      'mysticatea/arrow-parens': 'off',
      'mysticatea/block-scoped-var': 'error',
      'mysticatea/no-instanceof-array': 'error',
      'mysticatea/no-instanceof-wrapper': 'error',
      'mysticatea/no-literal-call': 'error',
      'mysticatea/no-this-in-static': 'off',
      'mysticatea/no-use-ignored-vars': ['error', '^_(?:[^_].*)?$'],
      'mysticatea/no-useless-rest-spread': 'off',
      'mysticatea/prefer-for-of': 'off',

      // standardjs
      'mysticatea/array-bracket-even-spacing': 'error',
      'mysticatea/computed-property-even-spacing': 'error',
      'mysticatea/no-callback-literal': 'error',
      'mysticatea/object-curly-even-spacing': 'off'
    }
  },
  tsConfig,
  mochaConfig,
  specialConfig
);
