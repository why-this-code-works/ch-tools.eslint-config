# ESLint shareable config for the [CoachHub](https://github.com/coachhubio) JS/TS coding style with a11y in mind

[![npm version](https://img.shields.io/npm/v/@coachhubio/eslint-config.svg)](https://www.npmjs.com/package/@coachhubio/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/coachhubio/ch-tools.eslint-config/blob/master/CHANGELOG.md)


> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [CoachHub](https://github.com/coachhubio) JS/TS coding style with a11y in mind


## Installation

```
$ npm install --save-dev @coachhubio/eslint-config
```

or

```
$ yarn add --dev @coachhubio/eslint-config
```


## Usage

Once the `@coachhubio/eslint-config` package is installed, you can use it by specifying `@coachhubio/eslint-config` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
// .eslintrc.js
module.exports = {
  extends: '@coachhubio/eslint-config',
  rules: {
    // Additional, per-project rules...
  }
}
```

## Under the hood

`@coachhubio/eslint-config` is based on the set of these recommended sets of rules:

### 1. [`plugin:@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts)

An ESLint plugin which provides the recommended lint rules for TypeScript codebases.

### 2. [`plugin:react/recommended`](https://github.com/yannickcr/eslint-plugin-react)

React specific linting rules for ESLint.

### 3. [`plugin:react-hooks/recommended`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

This ESLint plugin enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html). It is a part of the [Hooks API](https://reactjs.org/docs/hooks-intro.html) for React.

### 4. [`plugin:jsx-a11y/recommended`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

Static checker for a11y rules on JSX elements.

### 5. [`prettier`](https://github.com/prettier/eslint-config-prettier)

Turns off all rules that are unnecessary or might conflict with Prettier. Our Prettier config is located here: _TODO_ADD_LINK_TO_https://github.com/coachhubio/ch-tools.prettier-config_

---

Aside from the recommended sets of rules, we're enabling these rules:

- [`@typescript-eslint/consistent-type-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md)

```diff
- import { Foo } from 'Foo';
+ import type { Foo } from 'Foo';
```

- [`no-console`](https://eslint.org/docs/rules/no-console)

```js
console.log('debug') // will show error
```

- [`prefer-template`](https://eslint.org/docs/rules/prefer-template)

```diff
- const str = count + ' times';
+ const str = `${count} times';
```

- [`sort-imports`](https://eslint.org/docs/rules/sort-imports)

```diff
- import { B, A, C } from 'foo';
+ import { A, B, C } from 'foo';
```

## Releasing

The release process of this package is fully automated with [GitHub Actions](https://github.com/features/actions) and [`semantic-release`](https://github.com/semantic-release/semantic-release) which automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.

Follow the [`Commit message format`](https://github.com/semantic-release/semantic-release#commit-message-format) and semantic-release will automatically determine the next [semantic version](https://semver.org/) number, generate a changelog and publish the release.
