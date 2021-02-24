# @taogilaaa/eslint-config-typescript

Typescript ESLint config, under the hood we are extending and overriding [xo](https://github.com/xojs/eslint-config-xo-typescript)'s lint config.

## Installation

```sh
npm install --save-dev @taogilaaa/eslint-config-typescript
```

## Usage

After installing, update your project's `.eslintrc.js` file to import the rule sets you want:

```js
{
  "extends" : [
    "@taogilaaa/eslint-config-base",
    "@taogilaaa/eslint-config-typescript"
  ]
}
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
