/**
 * @author Sven Piller
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const angularConfig = require("./_angular")

module.exports = merge(
    {
        extends: ["plugin:@mysticatea/+browser"],
        globals: {
            angular: true,
        },
    },
    angularConfig
)
