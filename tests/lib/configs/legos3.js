/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Rules = require("./_rules")

describe("'legos3.js'", () => {
  const config = require("../../../lib/configs/legos3")

  it("should be a valid config.", () => {
    Rules.validateConfig(config, "legos3.js")
  })
})
