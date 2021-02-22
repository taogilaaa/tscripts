# tscripts

## Description

Centralized pluggable config for your JS/TS library. This library bundles all the necessary configurations and dependencies so you can focus on the code.

## Usage

```sh
yarn add --dev tscripts
```

### Editor support steps

Add a root tsconfig.json:

```json
{
  "extends": "tscripts/config/tsconfig.json",
  "include": ["src"]
}
```

Add a root babel.config.js:

```js
module.exports = require('tscripts/config/babel.config.js');
```

Add a root .prettierrc.js

```js
module.exports = require('tscripts/config/prettier.config.js');
```

