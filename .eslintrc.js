/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const path = require("path")
const fs = require("fs-extra")
const selfPath = __dirname
const modulePath = path.resolve(
    __dirname,
    "node_modules/@svenpiller/eslint-plugin"
)

// Make symlink to use itself.
if (!fs.existsSync(modulePath)) {
    fs.ensureDirSync(path.dirname(modulePath))
    fs.symlinkSync(selfPath, modulePath, "junction")
}

module.exports = {
    extends: ["plugin:@svenpiller/es2015", "plugin:@svenpiller/+eslint-plugin"],
}
