/**
 * @author Sven Piller
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const browserConfig = require("./+browser")
const moduleConfig = require("./+modules")

module.exports = {
    overrides: [
        merge({ files: ["*.js"] }, browserConfig, moduleConfig, {
            env: {
                browser: true,
            },
            globals: {
                angular: true,
            },
            rules: {
                // Enabled rules as error
                "@mysticatea/angular/avoid-scope-typos": "error",
                "@mysticatea/angular/component-limit": "error",
                "@mysticatea/angular/di": ["error", "$inject"],
                "@mysticatea/angular/file-name": [
                    "error",
                    {
                        typeSeparator: "dot",
                        ignoreTypeSuffix: true,
                    },
                ],
                "@mysticatea/angular/module-dependency-order": [
                    "error",
                    { grouped: true },
                ],
                "@mysticatea/angular/no-directive-replace": "error",
                "@mysticatea/angular/no-http-callback": "error",
                "@mysticatea/angular/on-destroy": "error",

                // Enabled rules as warning
                "@mysticatea/angular/component-name": [
                    "warn",
                    "/smp[A-Z].*Component$/",
                ],
                "@mysticatea/angular/constant-name": ["warn", "SMP_"],
                "@mysticatea/angular/controller-as": "warn",
                "@mysticatea/angular/controller-as-vm": ["warn", "vm"],
                "@mysticatea/angular/controller-name": [
                    "error",
                    "/smp[A-Z].*Controller$/",
                ],
                "@mysticatea/angular/di-order": ["warn", true],
                "@mysticatea/angular/di-unused": "warn",
                "@mysticatea/angular/directive-restrict": "warn",
                "@mysticatea/angular/dumb-inject": "warn",
                "@mysticatea/angular/factory-name": ["warn", "smp"],
                "@mysticatea/angular/no-inline-template": [
                    "warn",
                    { allowSimple: true },
                ],
                "@mysticatea/angular/no-run-logic": "warn",
                "@mysticatea/angular/prefer-component": "warn",
                "@mysticatea/angular/provider-name": [
                    "warn",
                    "/smp[A-Z].*Provider$/",
                ],
                "@mysticatea/angular/value-name": ["warn", "smp"],
                "@mysticatea/angular/module-name": [
                    "warn",
                    "/smp[A-Z].*Module$/",
                ],
                "@mysticatea/angular/service-name": [
                    "warn",
                    "/smp[A-Z].*Service$/",
                ],

                // Disabled rules
                "consistent-this": "off",
                "no-use-before-define": "off",
                "valid-jsdoc": "off",
                "@mysticatea/angular/no-services": [
                    "off",
                    ["$http", "$resource", "Restangular"],
                ],

                // eslint-plugin-angular-config - Standard rules
                "@mysticatea/angular/angularelement": "warn",
                "@mysticatea/angular/controller-as-route": "error",
                "@mysticatea/angular/deferred": "off",
                "@mysticatea/angular/definedundefined": "error",
                "@mysticatea/angular/directive-name": "off",
                "@mysticatea/angular/document-service": "error",
                "@mysticatea/angular/empty-controller": "off",
                "@mysticatea/angular/filter-name": "off",
                "@mysticatea/angular/foreach": "off",
                "@mysticatea/angular/function-type": "off",
                "@mysticatea/angular/interval-service": "error",
                "@mysticatea/angular/json-functions": "error",
                "@mysticatea/angular/log": "error",
                "@mysticatea/angular/module-getter": "error",
                "@mysticatea/angular/module-setter": "error",
                "@mysticatea/angular/no-angular-mock": "off",
                "@mysticatea/angular/no-controller": "off",
                "@mysticatea/angular/no-cookiestore": "error",
                "@mysticatea/angular/no-jquery-angularelement": "error",
                "@mysticatea/angular/no-private-call": "error",
                "@mysticatea/angular/no-service-method": "error",
                "@mysticatea/angular/on-watch": "error",
                "@mysticatea/angular/one-dependency-per-line": "off",
                "@mysticatea/angular/rest-service": "off",
                "@mysticatea/angular/timeout-service": "error",
                "@mysticatea/angular/typecheck-array": "error",
                "@mysticatea/angular/typecheck-date": "error",
                "@mysticatea/angular/typecheck-function": "error",
                "@mysticatea/angular/typecheck-number": "error",
                "@mysticatea/angular/typecheck-object": "error",
                "@mysticatea/angular/typecheck-string": "error",
                "@mysticatea/angular/watchers-execution": ["off", "$digest"],
                "@mysticatea/angular/window-service": "error",
            },
        }),
    ],
}
