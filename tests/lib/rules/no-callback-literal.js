/**
 * @fileoverview Tests for the no-callback-literal rule
 * @author Jamund Ferguson
 * @copyright 2016 Jamund Ferguson. All rights reserved.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-callback-literal")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester()

tester.run("no-callback-literal", rule, {
    valid: [
        // random stuff
        "horse()",
        "sort(null)",
        'require("zyx")',
        'require("zyx", data)',

        // callback()
        "callback()",
        "callback(undefined)",
        "callback(null)",
        "callback(x)",
        'callback(new Error("error"))',
        "callback(friendly, data)",
        "callback(undefined, data)",
        "callback(null, data)",
        "callback(x, data)",
        'callback(new Error("error"), data)',

        // cb()
        "cb()",
        "cb(undefined)",
        "cb(null)",
        'cb(undefined, "super")',
        'cb(null, "super")',

        // custom callback
        {
            code:
                'callback(44); cb("55"); power(new Error("super thing")); power(null);',
            options: [["power"]],
        },
    ],

    invalid: [
        // callback
        {
            code: 'callback(false, "snork")',
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },
        {
            code: 'callback("help")',
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },
        {
            code: 'callback("help", data)',
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },
        {
            code: 'callback("a" && 2)',
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },

        // cb
        {
            code: "cb(false)",
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },
        {
            code: 'cb("help")',
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },
        {
            code: 'cb("help", data)',
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },
        {
            code: 'cb("a" && 2)',
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },

        // custom callback name
        {
            code: "next(44)",
            options: [["next"]],
            errors: [
                {
                    message:
                        "Unexpected literal in error position of callback.",
                },
            ],
        },
    ],
})
