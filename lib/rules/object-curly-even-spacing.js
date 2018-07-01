"use strict"

/**
 * @fileoverview Disallows or enforces spaces inside of object literals.
 * @author Jamund Ferguson
 * @copyright 2014 Brandyn Bennett. All rights reserved.
 * @copyright 2014 Michael Ficarra. No rights reserved.
 * @copyright 2014 Vignesh Anand. All rights reserved.
 * @copyright 2015 Jamund Ferguson. All rights reserved.
 */
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            url:
                "https://github.com/sven-piller/eslint-plugin/blob/v0.1.0-0/docs/rules/object-curly-even-spacing.md",
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
            spaced,
            either,
            arraysInObjectsException: isOptionSet("arraysInObjects"),
            objectsInObjectsException: isOptionSet("objectsInObjects"),
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
         * @param {ASTNode} _node node
         * @param {Token} start start
         * @param {Token} end end
         * @returns {boolean} check
         */
        function isEvenlySpacedAndNotTooLong(_node, start, end) {
            const expectedSpace = start[1].range[0] - start[0].range[1]
            const endSpace = end[1].range[0] - end[0].range[1]
            return endSpace === expectedSpace && endSpace <= 1
        }

        /**
         * Determines if spacing in curly braces is valid.
         * @param {ASTNode} node The AST node to check.
         * @param {Token} first The first token to check (should be the opening brace)
         * @param {Token} second The second token to check (should be first after the opening brace)
         * @param {Token} penultimate The penultimate token to check (should be last before closing brace)
         * @param {Token} last The last token to check (should be closing brace)
         * @returns {void}
         */
        function validateBraceSpacing(node, first, second, penultimate, last) {
            const closingCurlyBraceMustBeSpaced =
                (options.arraysInObjectsException &&
                    penultimate.value === "]") ||
                (options.objectsInObjectsException && penultimate.value === "}")
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

            // { and key are on same line
            if (isSameLine(first, second)) {
                if (options.spaced && !isSpaced(first, second)) {
                    reportRequiredBeginningSpace(node, first)
                }
                if (!options.spaced && isSpaced(first, second)) {
                    reportNoBeginningSpace(node, first)
                }
            }

            // final key and } ore on the same line
            if (isSameLine(penultimate, last)) {
                if (
                    closingCurlyBraceMustBeSpaced &&
                    !isSpaced(penultimate, last)
                ) {
                    reportRequiredEndingSpace(node, last)
                }
                if (
                    !closingCurlyBraceMustBeSpaced &&
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
            // var {x} = y
            ObjectPattern(node) {
                if (node.properties.length === 0) {
                    return
                }

                const firstSpecifier = node.properties[0]
                const lastSpecifier =
                    node.properties[node.properties.length - 1]

                const first = context
                    .getSourceCode()
                    .getTokenBefore(firstSpecifier)
                const second = context
                    .getSourceCode()
                    .getFirstToken(firstSpecifier)
                let penultimate = context
                    .getSourceCode()
                    .getLastToken(lastSpecifier)
                let last = context.getSourceCode().getTokenAfter(lastSpecifier)

                // support trailing commas
                if (last.value === ",") {
                    penultimate = last
                    last = context.getSourceCode().getTokenAfter(last)
                }

                validateBraceSpacing(node, first, second, penultimate, last)
            },

            // import {y} from 'x'
            ImportDeclaration(node) {
                const firstSpecifier = node.specifiers[0]
                const lastSpecifier =
                    node.specifiers[node.specifiers.length - 1]

                // don't do anything for namespace or default imports
                if (
                    firstSpecifier &&
                    lastSpecifier &&
                    firstSpecifier.type === "ImportSpecifier" &&
                    lastSpecifier.type === "ImportSpecifier"
                ) {
                    const first = context
                        .getSourceCode()
                        .getTokenBefore(firstSpecifier)
                    const second = context
                        .getSourceCode()
                        .getFirstToken(firstSpecifier)
                    const penultimate = context
                        .getSourceCode()
                        .getLastToken(lastSpecifier)
                    const last = context
                        .getSourceCode()
                        .getTokenAfter(lastSpecifier)

                    validateBraceSpacing(node, first, second, penultimate, last)
                }
            },

            // export {name} from 'yo'
            ExportNamedDeclaration(node) {
                if (!node.specifiers.length) {
                    return
                }

                const firstSpecifier = node.specifiers[0]
                const lastSpecifier =
                    node.specifiers[node.specifiers.length - 1]
                const first = context
                    .getSourceCode()
                    .getTokenBefore(firstSpecifier)
                const second = context
                    .getSourceCode()
                    .getFirstToken(firstSpecifier)
                const penultimate = context
                    .getSourceCode()
                    .getLastToken(lastSpecifier)
                const last = context
                    .getSourceCode()
                    .getTokenAfter(lastSpecifier)

                validateBraceSpacing(node, first, second, penultimate, last)
            },

            // var y = {x: 'y'}
            ObjectExpression(node) {
                if (node.properties.length === 0) {
                    return
                }

                const first = context.getSourceCode().getFirstToken(node)
                const second = context.getSourceCode().getFirstToken(node, 1)
                const penultimate = context
                    .getSourceCode()
                    .getLastToken(node, 1)
                const last = context.getSourceCode().getLastToken(node)

                validateBraceSpacing(node, first, second, penultimate, last)
            },
        }
    },
}
