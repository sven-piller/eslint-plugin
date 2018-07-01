/**
 * @author Sven Piller
 * @copyright 2018 Sven Piller. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const Rules = require("./_rules")

describe("'angular.js'", () => {
    const config = require("../../../lib/configs/_angular")
    const configuredRules = Object.assign(
        {},
        config.rules,
        ...config.overrides.map(c => c.rules)
    )
    const existingRules = Rules.getPluginRuleNames("angular")

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "angular.js")
    })

    for (const ruleId of existingRules) {
        it(`should include existing rule '${ruleId}'.`, () => {
            assert(ruleId in configuredRules)
        })
    }
})
