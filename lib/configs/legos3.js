/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
  extends: ["plugin:@mysticatea/es5"],
  parserOptions: {
    ecmaVersion: 5,
    ecmaFeatures: { globalReturn: true },
  },
  env: {
    node: true,
    mocha: true,
  },
  globals: {
    __dirname: false,
    __filename: false,
    exports: false,
    module: false,
    require: false,
  },
  rules: {
    // //////// Possible Errors //////////
    "comma-dangle": "error", // disallow trailing commas in object literals
    "no-console": "warn", // disallow use of console (off by default in the node environment)
    "no-cond-assign": "warn", // disallow assignment in conditional expressions
    "no-constant-condition": "warn", // disallow use of constant expressions in conditions
    "no-control-regex": "warn", // disallow control characters in regular expressions
    "no-debugger": "warn", // disallow use of debugger
    "no-dupe-keys": "error", // disallow duplicate keys when creating object literals
    "no-duplicate-case": "error", // disallow a duplicate case label.
    "no-empty": "warn", // disallow empty statements
    "no-empty-character-class": "warn", // disallow the use of empty character classes in regular expressions
    "no-ex-assign": "warn", // disallow assigning to the exception in a catch block
    // "no-extra-boolean-cast": "off", // disallow double-negation boolean casts in a boolean context
    // "no-extra-parens": "off", // disallow unnecessary parentheses (off by default)
    "no-extra-semi": "warn", // disallow unnecessary semicolons
    "no-func-assign": "warn", // disallow overwriting functions written as function declarations
    "no-inner-declarations": ["off", "both"], // disallow function or variable declarations in nested blocks
    // "no-invalid-regexp": "off", // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": "warn", // disallow irregular whitespace outside of strings and comments
    // "no-negated-in-lhs": "off", // disallow negation of the left operand of an in expression
    "no-obj-calls": "warn", // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-prototype-builtins": "off", // disallow use of Object.prototypes builtins directly
    "no-regex-spaces": "warn", // disallow multiple spaces in a regular expression literal
    "no-sparse-arrays": "error", // disallow sparse arrays
    "no-unexpected-multiline": "warn", // disallow confusing multiline expressions
    "no-unreachable": "warn", // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unsafe-finally": "warn", // disallow control flow statements in finally blocks
    "use-isnan": "warn", // disallow comparisons with the value NaN
    "valid-jsdoc": ["warn", {
      "requireReturn": false,
      "prefer": {
        "return": "returns"
      },
      "preferType": {
        "String": "string",
        "Boolean": "boolean",
        "array": "Array",
        "object": "Object",
        "function": "Function",
        "Int": "number",
        "Number": "number"
      }
    }], // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": "error", // Ensure that the results of typeof are compared against a valid string

    // //////// Best Practices //////////
    "accessor-pairs": "off", // enforce getter and setter pairs in objects
    // "array-callback-return": "off", // Enforces return statements in callbacks of array’s methods
    "block-scoped-var": "error", // treat var statements as if they were block scoped (off by default)
    "complexity": ["error", { "max": 9 }], // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": "off", // require return statements to either always or never specify values
    "curly": "error", // specify curly brace conventions for all control statements
    "default-case": "warn", // require default case in switch statements (off by default)
    // "dot-location": ["error", "property"], // Enforce newline before and after dot
    "dot-notation": ["error", {
      "allowKeywords": true,
      "allowPattern": "^[a-z]+(_[a-z]+)+$"
    }], // encourages use of dot notation whenever possible
    "eqeqeq": ["error", "smart"], // require the use of === and !==
    "guard-for-in": "warn", // make sure for-in loops have an if statement (off by default)
    "no-alert": "warn", // disallow the use of alert, confirm, and prompt
    "no-caller": "off", // disallow use of arguments.caller or arguments.callee
    "no-div-regex": "warn", // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": "off", // disallow else after a return in an if (off by default)
    // "no-empty-function": "off", // Disallow empty functions
    // "no-empty-pattern": "off", // Disallow empty destructuring patterns
    "no-eq-null": "warn", // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": "warn", // disallow use of eval()
    "no-extend-native": "error", // disallow adding to native types
    "no-extra-bind": "warn", // disallow unnecessary function binding
    // "no-extra-label": "warn", // Disallow Unnecessary Labels
    "no-fallthrough": "warn", // disallow fallthrough of case statements
    "no-floating-decimal": "warn", // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    // "no-implicit-coercion": "off", // Disallow the type conversion with shorter notations.
    // "no-implicit-globals": "off", // Disallow var and Named Functions in Global Scope
    "no-implied-eval": "warn", // disallow use of eval()-like methods
    // "no-invalid-this": "warn", // Disallow this keywords outside of classes or class-like objects
    "no-iterator": "error", // disallow usage of __iterator__ property
    "no-labels": "warn", // disallow use of labeled statements
    "no-lone-blocks": "warn", // disallow unnecessary nested blocks
    "no-loop-func": "warn", // disallow creation of functions within loops
    // "no-magic-numbers": ["warn", { "detectObjects": true, "ignore": [1], "ignoreArrayIndexes": true }], // Disallow Magic Numbers
    "no-multi-spaces": ["warn", {
      "exceptions": {
        "Property": true,
        "VariableDeclarator": true,
        "AssignmentExpression": true
      }
    }], // disallow use of multiple spaces
    "no-multi-str": "warn", // disallow use of multiline strings
    // "no-native-reassign": "error", // disallow reassignments of native objects
    "no-new": "off", // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": "warn", // disallow use of new operator for Function object
    "no-new-wrappers": "warn", // disallows creating new instances of String, Number, and Boolean
    "no-octal": "error", // disallow use of octal literals
    "no-octal-escape": "error", // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    // "no-param-reassign": "off", // Disallow Reassignment of Function Parameters
    "no-proto": "warn", // disallow usage of __proto__ property
    "no-redeclare": "warn", // disallow declaring the same variable more then once
    "no-return-assign": "off", // disallow use of assignment in return statement
    "no-script-url": "off", // disallow use of javascript urls.
    // "no-self-assign": "warn", // Disallow Self Assignment
    "no-self-compare": "warn", // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": "warn", // disallow use of comma operator
    // "no-throw-literal": "error", // Restrict what can be thrown as an exception
    // "no-unmodified-loop-condition": "error", // Disallow unmodified conditions of loops
    "no-unused-expressions": "warn", // disallow usage of expressions in statement position
    // "no-useless-call": "off", // Disallow unnecessary .call() and .apply()
    // "no-useless-concat": "warn", // Disallow unnecessary .call() and .apply()
    // "no-useless-escape": "warn", // Disallow unnecessary escape usage
    "no-void": "off", // disallow use of void operator (off by default)
    "no-warning-comments": "warn", // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    "no-with": "error", // disallow use of the with statement
    "radix": "off", // require use of the second argument for parseInt() (off by default)
    "vars-on-top": "off", // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": ["error", "inside"], // require immediate function invocation to be wrapped in parentheses (off by default)
    "yoda": "off", // require or disallow Yoda conditions

    // //////// Strict Mode //////////
    "strict": ["error", "global"], // controls location of Use Strict Directives

    // //////// Variables //////////
    // "init-declarations": "off", // Enforce/Disallow Variable Initializations
    "no-catch-shadow": "error", // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": "error", // disallow deletion of variables
    "no-label-var": "error", // disallow labels that share a name with a variable
    // "no-restricted-globals": "off", // Disallow specific global variables
    "no-shadow": "warn", // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": "warn", // disallow shadowing of names such as arguments
    "no-undef": "warn", // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": "off", // disallow use of undefined when initializing variables
    "no-undefined": "warn", // disallow use of undefined variable (off by default)
    "no-unused-vars": ["warn", { "args": "none" }], // disallow declaration of variables that are not used in the code
    "no-use-before-define": ["error", { "functions": false, "classes": true }], // disallow use of variables before they are defined

    // //////// Node.js //////////
    // "callback-return": ["error",  ["callback", "cb", "next"]], // Enforce Return After Callback
    // "global-require": "error", // Enforce require() on the top-level module scope
    "handle-callback-err": ["error", "^.*(e|E)rr"], // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-mixed-requires": "error", // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    "no-new-require": "error", // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    "no-path-concat": "error", // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    "no-process-env": "off", // Disallow process.env
    "no-process-exit": "error", // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": "off", // restrict usage of specified node modules (off by default)
    "no-sync": "warn", // disallow use of synchronous methods (off by default)

    // //////// Stylistic Issues //////////
    "array-bracket-spacing": ["error", "never"], // Disallow or enforce spaces inside of brackets
    "block-spacing": "error", // Disallow or enforce spaces inside of single line blocks
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // enforce one true brace style (off by default)
    "camelcase": "warn", // require camel case names
    "comma-spacing": "warn", // enforce spacing before and after comma
    "comma-style": "warn", // enforce one true comma style (off by default)
    "computed-property-spacing": "off", // Disallow or enforce spaces inside of computed properties
    "consistent-this": "off", // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": "error", // enforce newline at the end of file, with no multiple empty lines
    "func-names": ["warn", "as-needed"], // require function expressions to have a name (off by default)
    "func-style": ["off", "expression"], // enforces use of function declarations or expressions (off by default)
    // "id-blacklist": "warn", // disallow specified identifiers
    // "id-length": "off", // enforce minimum and maximum identifier lengths
    // "id-match": "off", // require identifiers to match a specified regular expression
    // "indent": ["warn", "error", {
    //   "SwitchCase": "warn",
    //   "VariableDeclarator": { "var": "error", "let": "error", "const": 3 }
    // }], // this option sets a specific tab width for your code (off by default)
    // "jsx-quotes": [1], // enforce the consistent use of either double or single quotes in JSX attributes
    "key-spacing": "warn", // enforces spacing between keys and values in object literal properties
    "keyword-spacing": "warn", // enforce consistent spacing before and after keywords
    "linebreak-style": "off", // enforce consistent linebreak style
    "lines-around-comment": "off", // require empty lines around comments
    "max-nested-callbacks": "off", // specify the maximum depth callbacks can be nested (off by default)
    "max-depth": ["warn", 5], // enforce a maximum depth that blocks can be nested
    "max-len": ["warn", 120, {
      "ignoreComments": true,
      "ignoreTrailingComments": true
    }], // enforce a maximum line length
    "max-statements": ["warn", 15], // enforce a statement length
    "max-statements-per-line": ["warn", { "max": 2 }], // enforce a maximum number of statements allowed per line
    "new-cap": "warn", // require a capital letter for constructors
    "new-parens": "warn", // disallow the omission of parentheses when invoking a constructor with no arguments
    // "newline-after-var": "off", // require or disallow an empty line after var declarations
    // "newline-before-return": "off", // require or disallow an empty line after var declarations
    "newline-per-chained-call": "warn", // require a newline after each call in a method chain
    "no-array-constructor": "off", // disallow use of the Array constructor
    "no-bitwise": "warn", // disallow bitwise operators
    "no-continue": "off", // disallow continue statements
    "no-inline-comments": "off", // disallow comments inline after code (off by default)
    "no-lonely-if": "warn", // disallow if as the only statement in an else block (off by default)
    // "no-mixed-operators": "warn", // Disallow mixes of different operators
    "no-mixed-spaces-and-tabs": "error", // disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines": "off", // disallow multiple empty lines (off by default)
    "no-negated-condition": "off", // disallow negated conditions
    "no-nested-ternary": "off", // disallow nested ternary expressions (off by default)
    "no-new-object": "off", // disallow use of the Object constructor
    "no-plusplus": "off", // disallow the unary operators ++ and --
    "no-restricted-syntax": "off", // disallow specified syntax
    // "no-spaced-func": "warn", // disallow space between function identifier and application
    "no-ternary": "off", // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": "warn", // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": "off", // disallow dangling underscores in identifiers
    "no-unneeded-ternary": "warn", // Disallow conditional expressions that can be expressed with simpler constructs
    "no-whitespace-before-property": "warn", // Disallow whitespace before properties
    // "object-curly-newline": ["warn", { "multiline": true }], // require or disallow line breaks inside braces
    "object-curly-spacing": ["error", "always"], // Disallow or enforce spaces inside of brackets
    "object-property-newline": "warn", // enforce placing object properties on separate lines
    "one-var": ["warn", "never"], // allow just one var statement per function (off by default)
    "one-var-declaration-per-line": "off", // Require or disallow an newline around variable declarations
    "operator-assignment": "off", // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "operator-linebreak": "warn", // Operator Linebreak
    "padded-blocks": "off", // enforce padding within blocks (off by default)
    "quote-props": ["error", "as-needed"], // require quotes around object literal property names (off by default)
    "quotes": ["error", "single", { "avoidEscape": true }], // specify whether double or single quotes should be used
    "require-jsdoc": "warn", // Require JSDoc comment
    "semi": ["error", "always"], // require or disallow use of semicolons instead of ASI
    "semi-spacing": ["error", {
      "before": false,
      "after": true
    }], // enforce spacing before and after semicolons
    "sort-vars": "off", // sort variables within the same declaration block (off by default)
    "space-before-blocks": "off", // require or disallow space before blocks (off by default)
    "space-before-function-paren": ["warn", {
      "anonymous": "always",
      "named": "never"
    }], // Require or disallow a space before function parenthesis
    "space-in-parens": "off", // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": "warn", // require spaces around operators
    "space-unary-ops": ["warn", {
      "words": true,
      "nonwords": false
    }], // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "spaced-comment": ["warn", "always", {
      "exceptions": ["-", "+"],
      "markers": ["/"]
    }], // enforce consistent spacing after the // or /* in a comment
    "unicode-bom": "error", // Require or disallow the Unicode Byte Order Mark (BOM)
    "wrap-regex": 1 // require regex literals to be wrapped in parentheses (off by default),
  },
}
