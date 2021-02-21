# prettier-config

Base Prettier config used in tscripts.

## Installation

```sh
yarn add --dev @taogilaaa/prettier-config
```

## Usage

After installing, update your project's `prettier.config.js` file to import the rule sets you want:

```js
module.exports = {
  ...require('@taogilaaa/prettier-config'),
  // your overrides here
};
```

---

Read the [Prettier config docs](https://prettier.io) for more information.
