# babel-config

Base Babel config.

## Installation

```sh
pnpm i -D @taogilaaa/babel-config
```

## Usage

After installing, update your project's `babel.config.js` file to import the rule sets you want:

```js
let base = require('@taogilaaa/babel-config');

module.exports = function(api) {
  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    ...base(api),
    presets,
    plugins,
  };
};
```

---

Read the [Babel config docs](https://babeljs.io/docs/en/configuration) for more information.
