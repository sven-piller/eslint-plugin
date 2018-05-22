/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { CLIEngine } = require('eslint');

const targetFile = path.resolve(__dirname, '../lib/rules.js');

fs.writeFileSync(
  targetFile,
  `/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY './scripts/generate-rules.js'.
 */
"use strict"

module.exports = Object.assign(
${fs
    .readdirSync(path.resolve(__dirname, '../lib/foreign-rules'))
    .map(fileName => path.basename(fileName, '.js'))
    .map(id => `    require("./foreign-rules/${id}"),`)
    .join('\n')}
    {
${fs
    .readdirSync(path.resolve(__dirname, '../lib/rules'))
    .map(fileName => path.basename(fileName, '.js'))
    .map(id => `        "${id}": require("./rules/${id}"),`)
    .join('\n')}
    }
)
`
);

const linter = new CLIEngine({ fix: true });
const result = linter.executeOnFiles([targetFile]);
CLIEngine.outputFixes(result);
