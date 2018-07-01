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
                "@svenpiller/angular/avoid-scope-typos": "error",
                "@svenpiller/angular/component-limit": "error",
                "@svenpiller/angular/di": ["error", "$inject"],
                "@svenpiller/angular/file-name": [
                    "error",
                    {
                        typeSeparator: "dot",
                        ignoreTypeSuffix: true,
                    },
                ],
                "@svenpiller/angular/module-dependency-order": [
                    "error",
                    { grouped: true },
                ],
                "@svenpiller/angular/no-directive-replace": "error",
                "@svenpiller/angular/no-http-callback": "error",
                "@svenpiller/angular/on-destroy": "error",

                // Enabled rules as warning
                "@svenpiller/angular/component-name": [
                    "warn",
                    "/smp[A-Z].*Component$/",
                ],
                "@svenpiller/angular/constant-name": ["warn", "SMP_"],
                "@svenpiller/angular/controller-as": "warn",
                "@svenpiller/angular/controller-as-vm": ["warn", "vm"],
                "@svenpiller/angular/controller-name": [
                    "error",
                    "/smp[A-Z].*Controller$/",
                ],
                "@svenpiller/angular/di-order": ["warn", true],
                "@svenpiller/angular/di-unused": "warn",
                "@svenpiller/angular/directive-restrict": "warn",
                "@svenpiller/angular/dumb-inject": "warn",
                "@svenpiller/angular/factory-name": ["warn", "smp"],
                "@svenpiller/angular/no-inline-template": [
                    "warn",
                    { allowSimple: true },
                ],
                "@svenpiller/angular/no-run-logic": "warn",
                "@svenpiller/angular/prefer-component": "warn",
                "@svenpiller/angular/provider-name": [
                    "warn",
                    "/smp[A-Z].*Provider$/",
                ],
                "@svenpiller/angular/value-name": ["warn", "smp"],
                "@svenpiller/angular/module-name": [
                    "warn",
                    "/smp[A-Z].*Module$/",
                ],
                "@svenpiller/angular/service-name": [
                    "warn",
                    "/smp[A-Z].*Service$/",
                ],

                // Disabled rules
                "consistent-this": "off",
                "no-use-before-define": "off",
                "valid-jsdoc": "off",
                "@svenpiller/angular/no-services": [
                    "off",
                    ["$http", "$resource", "Restangular"],
                ],

                // eslint-plugin-angular-config - Standard rules
                "@svenpiller/angular/angularelement": "warn",
                "@svenpiller/angular/controller-as-route": "error",
                "@svenpiller/angular/deferred": "off",
                "@svenpiller/angular/definedundefined": "error",
                "@svenpiller/angular/directive-name": "off",
                "@svenpiller/angular/document-service": "error",
                "@svenpiller/angular/empty-controller": "off",
                "@svenpiller/angular/filter-name": "off",
                "@svenpiller/angular/foreach": "off",
                "@svenpiller/angular/function-type": "off",
                "@svenpiller/angular/interval-service": "error",
                "@svenpiller/angular/json-functions": "error",
                "@svenpiller/angular/log": "error",
                "@svenpiller/angular/module-getter": "error",
                "@svenpiller/angular/module-setter": "error",
                "@svenpiller/angular/no-angular-mock": "off",
                "@svenpiller/angular/no-controller": "off",
                "@svenpiller/angular/no-cookiestore": "error",
                "@svenpiller/angular/no-jquery-angularelement": "error",
                "@svenpiller/angular/no-private-call": "error",
                "@svenpiller/angular/no-service-method": "error",
                "@svenpiller/angular/on-watch": "error",
                "@svenpiller/angular/one-dependency-per-line": "off",
                "@svenpiller/angular/rest-service": "off",
                "@svenpiller/angular/timeout-service": "error",
                "@svenpiller/angular/typecheck-array": "error",
                "@svenpiller/angular/typecheck-date": "error",
                "@svenpiller/angular/typecheck-function": "error",
                "@svenpiller/angular/typecheck-number": "error",
                "@svenpiller/angular/typecheck-object": "error",
                "@svenpiller/angular/typecheck-string": "error",
                "@svenpiller/angular/watchers-execution": ["off", "$digest"],
                "@svenpiller/angular/window-service": "error",
            },
        }),
    ],
}
