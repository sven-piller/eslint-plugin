/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    parserOptions: {
        sourceType: "module",
    },
    rules: {
        strict: "off",
        "@svenpiller/node/no-extraneous-import": "error",
        "@svenpiller/node/no-missing-import": "error",
        "@svenpiller/node/no-unpublished-import": "error",
    },
}
