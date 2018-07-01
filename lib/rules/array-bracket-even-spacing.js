"use strict"

/**
 * @fileoverview Disallows or enforces spaces inside of array brackets.
 * @author Jamund Ferguson
 * @copyright 2015 Jamund Ferguson. All rights reserved.
 * @copyright 2014 Brandyn Bennett. All rights reserved.
 * @copyright 2014 Michael Ficarra. No rights reserved.
 * @copyright 2014 Vignesh Anand. All rights reserved.
 */
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            url:
                "https://github.com/sven-piller/eslint-plugin/blob/v0.0.1/docs/rules/array-bracket-even-spacing.md",
        },
    },

    create(context) {
        const spaced = context.options[0] === "always"
        const either = context.options[0] === "either"

        /**
         * Determines whether an option is set, relative to the spacing option.
         * If spaced is "always", then check whether option is set to false.
         * If spaced is "never", then check whether option is set to true.
         * @param {object} option - The option to exclude.
         * @returns {boolean} Whether or not the property is excluded.
         */
        function isOptionSet(option) {
            return context.options[1] != null
                ? context.options[1][option] === !spaced
                : false
        }

        const options = {
            either,
            spaced,
            singleElementException: isOptionSet("singleValue"),
            objectsInArraysException: isOptionSet("objectsInArrays"),
            arraysInArraysException: isOptionSet("arraysInArrays"),
        }

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
                loc: token.loc.start,
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
                loc: token.loc.start,
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
                loc: token.loc.start,
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
                loc: token.loc.start,
                data: { value },
                message: "A space is required before '{{value}}'.",
            })
        }

        /**
         * Checks if a start and end brace in a node are spaced evenly
         * and not too long (>1 space)
         * @param {ASTNode} _node - The node to report in the event of an error.
         * @param {object} start start
         * @param {object} end end
         * @returns {boolean} answer
         */
        function isEvenlySpacedAndNotTooLong(_node, start, end) {
            const expectedSpace = start[1].range[0] - start[0].range[1]
            const endSpace = end[1].range[0] - end[0].range[1]
            return endSpace === expectedSpace && endSpace <= 1
        }

        /**
         * Validates the spacing around array brackets
         * @param {ASTNode} node - The node we're checking for spacing
         * @returns {void} nothing
         */
        function validateArraySpacing(node) {
            if (node.elements.length === 0) {
                return
            }

            const first = context.getSourceCode().getFirstToken(node)
            const second = context.getSourceCode().getFirstToken(node, 1)
            const penultimate = context.getSourceCode().getLastToken(node, 1)
            const last = context.getSourceCode().getLastToken(node)

            const openingBracketMustBeSpaced =
                (options.objectsInArraysException && second.value === "{") ||
                (options.arraysInArraysException && second.value === "[") ||
                (options.singleElementException && node.elements.length === 1)
                    ? !options.spaced
                    : options.spaced

            const closingBracketMustBeSpaced =
                (options.objectsInArraysException &&
                    penultimate.value === "}") ||
                (options.arraysInArraysException &&
                    penultimate.value === "]") ||
                (options.singleElementException && node.elements.length === 1)
                    ? !options.spaced
                    : options.spaced

            // we only care about evenly spaced things
            if (options.either) {
                // newlines at any point means return
                if (!isSameLine(first, last)) {
                    return
                }

                // confirm that the object expression/literal is spaced evenly
                if (
                    !isEvenlySpacedAndNotTooLong(
                        node,
                        [first, second],
                        [penultimate, last]
                    )
                ) {
                    context.report({
                        node,
                        message: "Expected consistent spacing.",
                    })
                }

                return
            }

            if (isSameLine(first, second)) {
                if (openingBracketMustBeSpaced && !isSpaced(first, second)) {
                    reportRequiredBeginningSpace(node, first)
                }
                if (!openingBracketMustBeSpaced && isSpaced(first, second)) {
                    reportNoBeginningSpace(node, first)
                }
            }

            if (isSameLine(penultimate, last)) {
                if (
                    closingBracketMustBeSpaced &&
                    !isSpaced(penultimate, last)
                ) {
                    reportRequiredEndingSpace(node, last)
                }
                if (
                    !closingBracketMustBeSpaced &&
                    isSpaced(penultimate, last)
                ) {
                    reportNoEndingSpace(node, last)
                }
            }
        }

        // --------------------------------------------------------------------------
        // Public
        // --------------------------------------------------------------------------

        return {
            ArrayPattern: validateArraySpacing,
            ArrayExpression: validateArraySpacing,
        }
    },
}
