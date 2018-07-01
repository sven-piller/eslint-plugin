"use strict"

/**
 * @fileoverview Disallows or enforces spaces inside computed properties.
 * @author Jamund Ferguson
 * @copyright 2015 Jamund Ferguson. All rights reserved.
 */
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            url:
                "https://github.com/mysticatea/eslint-plugin/blob/v5.0.1/docs/rules/computed-property-even-spacing.md",
        },
    },

    create(context) {
        const propertyNameMustBeSpaced = context.options[0] === "always" // default is "never"
        const propertyNameMustBeEven = context.options[0] === "even" // default is "never"

        // --------------------------------------------------------------------------
        // Helpers
        // --------------------------------------------------------------------------

        /**
         * Determines whether two adjacent tokens are have whitespace between them.
         * @param {object} left - The left token object.
         * @param {object} right - The right token object.
         * @returns {boolean} Whether or not there is space between the tokens.
         */
        function isSpaced(left, right) {
            return left.range[1] < right.range[0]
        }

        /**
         * Determines whether two adjacent tokens are on the same line.
         * @param {object} left - The left token object.
         * @param {object} right - The right token object.
         * @returns {boolean} Whether or not the tokens are on the same line.
         */
        function isSameLine(left, right) {
            return left.loc.start.line === right.loc.start.line
        }

        /**
         * Reports that there shouldn't be a space after the first token
         * @param {ASTNode} node - The node to report in the event of an error.
         * @param {Token} token - The token to use for the report.
         * @returns {void}
         */
        function reportNoBeginningSpace(node, token) {
            const value = token.value
            context.report({
                node,
                data: { value },
                message: "There should be no space after '{{value}}'.",
            })
        }

        /**
         * Reports that there shouldn't be a space before the last token
         * @param {ASTNode} node - The node to report in the event of an error.
         * @param {Token} token - The token to use for the report.
         * @returns {void}
         */
        function reportNoEndingSpace(node, token) {
            const value = token.value
            context.report({
                node,
                data: { value },
                message: "There should be no space before '{{value}}'.",
            })
        }

        /**
         * Reports that there should be a space after the first token
         * @param {ASTNode} node - The node to report in the event of an error.
         * @param {Token} token - The token to use for the report.
         * @returns {void}
         */
        function reportRequiredBeginningSpace(node, token) {
            const value = token.value
            context.report({
                node,
                data: { value },
                message: "A space is required after '{{value}}'.",
            })
        }

        /**
         * Reports that there should be a space before the last token
         * @param {ASTNode} node - The node to report in the event of an error.
         * @param {Token} token - The token to use for the report.
         * @returns {void}
         */
        function reportRequiredEndingSpace(node, token) {
            const value = token.value
            context.report({
                node,
                data: { value },
                message: "A space is required before '{{value}}'.",
            })
        }

        /**
         * Returns a function that checks the spacing of a node on the property name
         * that was passed in.
         * @param {string} propertyName The property on the node to check for spacing
         * @returns {function} A function that will check spacing on a node
         */
        function checkSpacing(propertyName) {
            return function(node) {
                if (!node.computed) {
                    return
                }

                const property = node[propertyName]

                const before = context.getSourceCode().getTokenBefore(property)
                const first = context.getSourceCode().getFirstToken(property)
                const last = context.getSourceCode().getLastToken(property)
                const after = context.getSourceCode().getTokenAfter(property)
                let startSpace = null

                let endSpace = null

                if (propertyNameMustBeEven) {
                    if (!isSameLine(before, after)) {
                        context.report({
                            node,
                            message:
                                'Expected "[" and "]" to be on the same line.',
                        })
                        return
                    }
                    startSpace = first.loc.start.column - before.loc.end.column
                    endSpace = after.loc.start.column - last.loc.end.column

                    if (startSpace !== endSpace || startSpace > 1) {
                        context.report({
                            node,
                            message:
                                'Expected 1 or 0 spaces around "[" and "]".',
                        })
                    }

                    return
                }

                if (isSameLine(before, first)) {
                    if (propertyNameMustBeSpaced) {
                        if (
                            !isSpaced(before, first) &&
                            isSameLine(before, first)
                        ) {
                            reportRequiredBeginningSpace(node, before)
                        }
                    } else if (isSpaced(before, first)) {
                        reportNoBeginningSpace(node, before)
                    }
                }

                if (isSameLine(last, after)) {
                    if (propertyNameMustBeSpaced) {
                        if (!isSpaced(last, after) && isSameLine(last, after)) {
                            reportRequiredEndingSpace(node, after)
                        }
                    } else if (isSpaced(last, after)) {
                        reportNoEndingSpace(node, after)
                    }
                }
            }
        }

        // --------------------------------------------------------------------------
        // Public
        // --------------------------------------------------------------------------

        return {
            Property: checkSpacing("key"),
            MemberExpression: checkSpacing("property"),
        }
    },
}
