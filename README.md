# @svenpiller/eslint-plugin

[![npm version](https://img.shields.io/npm/v/@svenpiller/eslint-plugin.svg)](https://www.npmjs.com/package/@svenpiller/eslint-plugin)
[![Downloads/month](https://img.shields.io/npm/dm/@svenpiller/eslint-plugin.svg)](http://www.npmtrends.com/@svenpiller/eslint-plugin)
[![Build Status](https://travis-ci.org/sven-piller/eslint-plugin.svg?branch=master)](https://travis-ci.org/sven-piller/eslint-plugin)
[![codecov](https://codecov.io/gh/sven-piller/eslint-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/sven-piller/eslint-plugin)
[![Dependency Status](https://david-dm.org/sven-piller/eslint-plugin.svg)](https://david-dm.org/sven-piller/eslint-plugin)

Additional ESLint rules and ESLint configurations for me.

## 💿 Installation

```
npm install --save-dev eslint @svenpiller/eslint-plugin
```

### Requirements

- Node.js `^6.5.0`, `^8.0.0`, `^9.0.0` or newer versions.
- ESLint `^4.19.1` or newer versions.

## 📖 Usage

Write in your ESLint configurations: http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin

### Configs

- `plugin:@svenpiller/es2019` ... Basic configuration for ES2019.
- `plugin:@svenpiller/es2018` ... Basic configuration for ES2018.
- `plugin:@svenpiller/es2017` ... Basic configuration for ES2017.
- `plugin:@svenpiller/es2016` ... Basic configuration for ES2016.
- `plugin:@svenpiller/es2015` ... Basic configuration for ES2015.
- `plugin:@svenpiller/es5` ... Basic configuration for ES5.
- `plugin:@svenpiller/+modules` ... Additional configuration for ES modules.
- `plugin:@svenpiller/+browser` ... Additional configuration for browser environment.
- `plugin:@svenpiller/+angular` ... Additional configuration for angularJs browser environment.
- `plugin:@svenpiller/+node` ... Additional configuration for Node.js environment.
- `plugin:@svenpiller/+eslint-plugin` ... Additional configuration for ESLint plugins. This includes `plugin:sven-piller/+node` setting.

#### Details

The main configurations `plugin:@svenpiller/es*` does:

- detect bug-like code by ESLint rules.
- enforce whitespace style by Prettier.
- handle the `.ts` files as TypeScript then check by `typescript-eslint-parser` and `eslint-plugin-typescript`.
- handle the `.vue` files as Vue.js SFC then check by `vue-eslint-parser` and `eslint-plugin-vue`.
- handle the files in `test`/`tests` directory as `mocha`'s test code.
- handle the files in `scripts` directory as Node.js environment.
- handle the `.eslintrc.js` file as a Node.js script.
- handle the `webpack.config.js` file as a Node.js script.
- handle the `rollup.config.js` file as an ES module.

You can use combination of a main configuration and some additional configurations.
For examples:

##### For Node.js

```json
{
    "extends": [
        "plugin:@svenpiller/es2015",
        "plugin:@svenpiller/+node"
    ]
}
```

> It handles `.js` files as scripts and `.mjs` files as modules.

##### For Browsers

```json
{
    "extends": [
        "plugin:@svenpiller/es2015",
        "plugin:@svenpiller/+browser"
    ]
}
```

##### For Browsers with ES modules

```json
{
    "extends": [
        "plugin:@svenpiller/es2015",
        "plugin:@svenpiller/+modules",
        "plugin:@svenpiller/+browser"
    ]
}
```

##### For ESLint plugins

```json
{
    "extends": [
        "plugin:@svenpiller/es2015",
        "plugin:@svenpiller/+eslint-plugin"
    ]
}
```

### Rules

This plugin has some original rules and foreign rules.

#### Original rules

- [@svenpiller/arrow-parens](docs/rules/arrow-parens.md) enforces parens of argument lists (excludes too redundant parens) (fixable).
- [@svenpiller/block-scoped-var](docs/rules/block-scoped-var.md) handles variables which are declared by `var` declaration as block-scoped. It disallows redeclarations, uses from outside of the scope, shadowing.
- [@svenpiller/no-instanceof-array](docs/rules/no-instanceof-array.md) disallows 'instanceof' for Array (fixable).
- [@svenpiller/no-instanceof-wrapper](docs/rules/no-instanceof-wrapper.md) disallows 'instanceof' for wrapper objects (fixable).
- [@svenpiller/no-literal-call](docs/rules/no-literal-call.md) disallows a call of a literal.
- [@svenpiller/no-this-in-static](docs/rules/no-this-in-static.md) disallows `this`/`super` in static methods.
- [@svenpiller/no-use-ignored-vars](docs/rules/no-use-ignored-vars.md) disallows a use of ignored variables.
- [@svenpiller/no-useless-rest-spread](docs/rules/no-useless-rest-spread.md) disallows unnecessary rest/spread operators (fixable).
- [@svenpiller/prefer-for-of](docs/rules/prefer-for-of.md) requires `for-of` statements instead of `Array#forEach` or something like (fixable).

#### Foreign rules

- All `@svenpiller/eslint-comments/*` rules are imported from [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments).
- All `@svenpiller/eslint-plugin/*` rules are imported from [eslint-plugin-eslint-plugin](https://www.npmjs.com/package/eslint-plugin-eslint-plugin).
- All `@svenpiller/node/*` rules are imported from [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node).
- All `@svenpiller/ts/*` rules are imported from [eslint-plugin-typescript](https://www.npmjs.com/package/eslint-plugin-typescript).
- All `@svenpiller/vue/*` rules are imported from [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue).
- The `@svenpiller/prettier` rule is imported from [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier).
- All `@svenpiller/angular/*` rules are imported from [eslint-plugin-angular](https://www.npmjs.com/package/eslint-plugin-angular).

> **Q:** Why don't you use those plugins directly?<br>
> **A:** The combination with shareable configs and plugins has some problems because shareable configs were not designed to be used with plugins. @nzakas illustrated a way to use plugins as shareable configs together with other plugins in the discussion [eslint/eslint#3458](https://github.com/eslint/eslint/issues/3458#issuecomment-257161846). This is the way.

## 🚥 Semantic Versioning Policy

This plugin follows [semantic versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## 📰 Changelog

- [GitHub Releases](https://github.com/sven-piller/eslint-plugin/releases)

## ❤️ Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm run clean` removes the coverage result of `npm test` command.
- `npm run coverage` shows the coverage result of `npm test` command.
- `npm run update` updates auto-generated files.
- `npm run watch` runs tests and measures coverage when source code are changed.
