# tstart

Javascript project initializer.

Includes babel + typescript, eslint, prettier, and other goodness.

tstart works on macOS, Windows, and Linux.

## Usage

Using npx:

```bash
npx tstart init my-app
```

Using npm / yarn:

```bash
npm i -g tstart # Or yarn global add tstart
tstart init my-app
```

## Other Commands

```bash
tstart --help
```

## Local Development

To locally test your changes

```sh
yarn build && npm pack
```

this will generate a `.tgz` based on `name` and `version` inside `package.json`, then simply run

```sh
npm i -g NAME-VERSION.tgz
```
