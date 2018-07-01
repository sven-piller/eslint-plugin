/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    extends: ["plugin:@svenpiller/es2016"],
    parserOptions: {
        ecmaVersion: 2017,
    },
    globals: {
        Atomics: false,
        SharedArrayBuffer: false,
    },
    rules: {
        "@svenpiller/prettier": [
            "error",
            {
                tabWidth: 4,
                semi: false,
                trailingComma: "all",
            },
            {
                usePrettierrc: false,
            },
        ],
    },
}
