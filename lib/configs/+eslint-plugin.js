/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { rulesDocumentUrl } = require("../utils")

module.exports = {
    extends: ["plugin:@svenpiller/+node"],
    overrides: [
        {
            files: ["**/rules/**", "**/internal-rules/**"],
            rules: {
                // Enabled rules
                "@svenpiller/eslint-plugin/consistent-output": "error",
                "@svenpiller/eslint-plugin/fixer-return": "error",
                "@svenpiller/eslint-plugin/no-deprecated-context-methods":
                    "error",
                "@svenpiller/eslint-plugin/no-deprecated-report-api": "error",
                "@svenpiller/eslint-plugin/no-identical-tests": "error",
                "@svenpiller/eslint-plugin/no-missing-placeholders": "error",
                "@svenpiller/eslint-plugin/no-unused-placeholders": "error",
                "@svenpiller/eslint-plugin/no-useless-token-range": "error",
                "@svenpiller/eslint-plugin/prefer-output-null": "error",
                "@svenpiller/eslint-plugin/prefer-placeholders": "error",
                "@svenpiller/eslint-plugin/prefer-replace-text": "error",
                "@svenpiller/eslint-plugin/report-message-format": [
                    "error",
                    "[^a-z'\"{].*\\.$",
                ],
                "@svenpiller/eslint-plugin/require-meta-docs-url": [
                    "error",
                    { pattern: rulesDocumentUrl },
                ],
                "@svenpiller/eslint-plugin/require-meta-fixable": "error",
                "@svenpiller/eslint-plugin/test-case-property-ordering":
                    "error",
                "@svenpiller/eslint-plugin/test-case-shorthand-strings":
                    "error",
            },
        },
    ],
}
