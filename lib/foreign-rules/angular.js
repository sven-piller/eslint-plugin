/**
 * @author Sven Piller
 * See LICENSE file in root directory for full license.
 */
'use strict';

const rules = require('eslint-plugin-angular').rules;

module.exports = Object.keys(rules).reduce((obj, ruleId) => {
  obj[`angular/${ruleId}`] = rules[ruleId];
  return obj;
}, {});
