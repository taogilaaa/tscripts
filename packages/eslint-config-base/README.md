# eslint-config-base

Base ESLint config, under the hood we are extending and overriding [xo](https://github.com/xojs/eslint-config-xo-space)'s lint config.

## Installation

```sh
yarn add --dev @taogilaaa/eslint-config-base eslint
```

## Usage

After installing, update your project's `.eslintrc.js` file to import the rule sets you want:

```js
{
  "extends" : [
    "@taogilaaa/eslint-config-base"
  ]
}
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
