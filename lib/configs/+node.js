/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const modulesConfig = require("./+modules")

module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
    },
    globals: {
        Buffer: false,
        URL: false,
        URLSearchParams: false,
        clearImmediate: false,
        global: false,
        process: false,
        setImmediate: false,
    },
    rules: {
        "@svenpiller/node/no-deprecated-api": "error",
        "@svenpiller/node/no-unpublished-bin": "error",
        "@svenpiller/node/no-unsupported-features": "error",
        "@svenpiller/node/process-exit-as-throw": "error",
        "@svenpiller/node/shebang": "error",
    },
    overrides: [
        {
            files: ["*.js"],
            globals: {
                __dirname: false,
                __filename: false,
                exports: false,
                module: false,
                require: false,
            },
            parserOptions: {
                ecmaFeatures: { globalReturn: true },
            },
            rules: {
                "@svenpiller/node/exports-style": ["error", "module.exports"],
                "@svenpiller/node/no-extraneous-require": "error",
                "@svenpiller/node/no-missing-require": "error",
                "@svenpiller/node/no-unpublished-require": "error",
            },
        },
        merge({ files: ["*.mjs"] }, modulesConfig, {
            rules: {
                "@svenpiller/node/no-unsupported-features": [
                    "error",
                    { ignores: ["modules"] },
                ],
            },
            settings: {
                node: {
                    tryExtensions: [".mjs", ".js", ".json", ".node"],
                },
            },
        }),
        {
            files: ["*.ts", "*.vue"],
            rules: {
                "@svenpiller/node/no-unsupported-features": [
                    "error",
                    { ignores: ["syntax"] },
                ],
            },
        },
    ],
}
