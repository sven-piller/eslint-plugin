/**
 * Ensures that the callback pattern is followed properly
 * with an Error object (or undefined or null) in the first position.
 */

"use strict"

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Determine if a node has a possiblity to be an Error object
 * @param  {ASTNode}  node  ASTNode to check
 * @returns {boolean}       True if there is a chance it contains an Error obj
 */
function couldBeError(node) {
    switch (node.type) {
        case "Identifier":
        case "CallExpression":
        case "NewExpression":
        case "MemberExpression":
        case "TaggedTemplateExpression":
        case "YieldExpression":
            return true // possibly an error object.

        case "AssignmentExpression":
            return couldBeError(node.right)

        case "SequenceExpression":
            return (
                node.expressions.length !== 0 &&
                couldBeError(node.expressions[node.expressions.length - 1])
            )

        case "LogicalExpression":
            return couldBeError(node.left) || couldBeError(node.right)

        case "ConditionalExpression":
            return couldBeError(node.consequent) || couldBeError(node.alternate)

        default:
            return node.value === null
    }
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            url:
                "https://github.com/sven-piller/eslint-plugin/blob/v0.0.1/docs/rules/no-callback-literal.md",
        },
    },

    create(context) {
        const callbackNames = context.options[0] || ["callback", "cb"]

        /**
         * Checks if the function under test is a callback based on naming convention
         * @param {string} name name
         * @returns {boolean} result
         */
        function isCallback(name) {
            return callbackNames.indexOf(name) > -1
        }

        return {
            CallExpression(node) {
                const errorArg = node.arguments[0]
                const calleeName = node.callee.name

                if (
                    errorArg &&
                    !couldBeError(errorArg) &&
                    isCallback(calleeName)
                ) {
                    context.report({
                        node,
                        message:
                            "Unexpected literal in error position of callback.",
                    })
                }
            },
        }
    },
}
