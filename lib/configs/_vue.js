/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const browserConfig = require("./+browser")
const modulesConfig = require("./+modules")

module.exports = {
    overrides: [
        merge({ files: ["*.vue"] }, browserConfig, modulesConfig, {
            parser: require.resolve("vue-eslint-parser"),
            rules: {
                // Enabled rules
                "@svenpiller/vue/max-attributes-per-line": [
                    "error",
                    {
                        singleline: 3,
                        multiline: {
                            max: 1,
                            allowFirstLine: false,
                        },
                    },
                ],
                "@svenpiller/vue/comment-directive": "error",
                "@svenpiller/vue/jsx-uses-vars": "error",
                "@svenpiller/vue/no-async-in-computed-properties": "error",
                "@svenpiller/vue/no-dupe-keys": "error",
                "@svenpiller/vue/no-duplicate-attributes": "error",
                "@svenpiller/vue/no-parsing-error": "error",
                "@svenpiller/vue/no-reserved-keys": "error",
                "@svenpiller/vue/no-shared-component-data": "error",
                "@svenpiller/vue/no-side-effects-in-computed-properties":
                    "error",
                "@svenpiller/vue/no-template-key": "error",
                "@svenpiller/vue/no-textarea-mustache": "error",
                "@svenpiller/vue/no-unused-vars": "error",
                "@svenpiller/vue/require-component-is": "error",
                "@svenpiller/vue/require-render-return": "error",
                "@svenpiller/vue/require-v-for-key": "error",
                "@svenpiller/vue/require-valid-default-prop": "error",
                "@svenpiller/vue/return-in-computed-property": "error",
                "@svenpiller/vue/valid-template-root": "error",
                "@svenpiller/vue/valid-v-bind": "error",
                "@svenpiller/vue/valid-v-cloak": "error",
                "@svenpiller/vue/valid-v-else-if": "error",
                "@svenpiller/vue/valid-v-else": "error",
                "@svenpiller/vue/valid-v-for": "error",
                "@svenpiller/vue/valid-v-html": "error",
                "@svenpiller/vue/valid-v-if": "error",
                "@svenpiller/vue/valid-v-model": "error",
                "@svenpiller/vue/valid-v-on": "error",
                "@svenpiller/vue/valid-v-once": "error",
                "@svenpiller/vue/valid-v-pre": "error",
                "@svenpiller/vue/valid-v-show": "error",
                "@svenpiller/vue/valid-v-text": "error",
                "@svenpiller/vue/attribute-hyphenation": "error",
                "@svenpiller/vue/html-end-tags": "error",
                "@svenpiller/vue/html-indent": ["error", 4],
                "@svenpiller/vue/html-self-closing": "error",
                "@svenpiller/vue/mustache-interpolation-spacing": "error",
                "@svenpiller/vue/name-property-casing": "error",
                "@svenpiller/vue/no-multi-spaces": "error",
                "@svenpiller/vue/require-default-prop": "error",
                "@svenpiller/vue/require-prop-types": "error",
                "@svenpiller/vue/v-bind-style": "error",
                "@svenpiller/vue/v-on-style": "error",
                "@svenpiller/vue/attributes-order": "error",
                "@svenpiller/vue/html-quotes": "error",
                "@svenpiller/vue/no-confusing-v-for-v-if": "error",
                "@svenpiller/vue/order-in-components": "error",
                "@svenpiller/vue/this-in-template": "error",
                "@svenpiller/vue/html-closing-bracket-newline": [
                    "error",
                    {
                        singleline: "never",
                        multiline: "always",
                    },
                ],
                "@svenpiller/vue/html-closing-bracket-spacing": "error",
                "@svenpiller/vue/prop-name-casing": "error",

                // Disabled rules
                "@svenpiller/vue/script-indent": "off",
            },
            settings: {
                node: {
                    tryExtensions: [
                        ".vue",
                        ".ts",
                        ".mjs",
                        ".js",
                        ".json",
                        ".node",
                    ],
                },
            },
        }),
    ],
}
