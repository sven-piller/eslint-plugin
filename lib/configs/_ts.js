/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const moduleConfig = require("./+modules")

module.exports = {
    overrides: [
        merge({ files: ["*.ts"] }, moduleConfig, {
            parser: require.resolve("typescript-eslint-parser"),
            rules: {
                // Enabled rules
                "one-var": ["error", "never"],
                "@svenpiller/ts/adjacent-overload-signatures": "error",
                "@svenpiller/ts/class-name-casing": "error",
                "@svenpiller/ts/explicit-function-return-type": [
                    "error",
                    { allowExpressions: true },
                ],
                "@svenpiller/ts/explicit-member-accessibility": "error",
                "@svenpiller/ts/member-naming": "error",
                "@svenpiller/ts/no-angle-bracket-type-assertion": "error",
                "@svenpiller/ts/no-array-constructor": "error",
                "@svenpiller/ts/no-empty-interface": "error",
                "@svenpiller/ts/no-inferrable-types": "error",
                "@svenpiller/ts/no-parameter-properties": "error",
                "@svenpiller/ts/no-triple-slash-reference": "error",
                "@svenpiller/ts/no-unused-vars": "error",
                "@svenpiller/ts/no-use-before-define": "error",
                "@svenpiller/ts/no-var-requires": "error",
                "@svenpiller/ts/prefer-namespace-keyword": "error",
                "@svenpiller/prettier": [
                    "error",
                    {
                        tabWidth: 4,
                        semi: false,
                        trailingComma: "all",
                        parser: "typescript",
                    },
                    {
                        usePrettierrc: false,
                    },
                ],

                // Disabled rules
                "func-style": "off",
                "init-declarations": "off",
                "lines-between-class-members": "off",
                "no-invalid-this": "off",
                "no-loop-func": "off",
                "no-redeclare": "off",
                "no-undef": "off",
                "no-unused-vars": "off",
                "no-use-before-define": "off",
                "valid-jsdoc": "off",
                "@svenpiller/ts/interface-name-prefix": "off",
                "@svenpiller/ts/member-delimiter-style": "off", // favor of Prettier.
                "@svenpiller/ts/member-ordering": "off",
                "@svenpiller/ts/no-explicit-any": "off",
                "@svenpiller/ts/no-namespace": "off", // I like the namespace for interfaces (type only things).
                "@svenpiller/ts/no-non-null-assertion": "off",
                "@svenpiller/ts/no-type-alias": "off",
                "@svenpiller/ts/type-annotation-spacing": "off", // favor of Prettier.
            },
            settings: {
                node: {
                    tryExtensions: [".ts", ".mjs", ".js", ".json", ".node"],
                },
            },
        }),
    ],
}
