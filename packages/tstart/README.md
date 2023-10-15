# tstart

Javascript project initializer.

Includes babel + typescript, eslint, prettier, and other goodness.

tstart works on macOS, Windows, and Linux.

## Usage

Using npx / pnpm exec:

```bash
npx tstart init my-app # Or pnpm exec tstart init my-app
```

Using npm / yarn:

```bash
npm i -g tstart # Or yarn global add tstart
tstart init my-app
```

Using pnpm:

```bash
pnpm i -g tstart
tstart init my-app
```

## Other Commands

```bash
tstart --help
```

## Local Development

To locally test your changes

```sh
pnpm build && pnpm pack
```

this will generate a `.tgz` based on `name` and `version` inside `package.json`, then simply run

```sh
pnpm add -g ./PATH_TO_FILE/NAME-VERSION.tgz
```
