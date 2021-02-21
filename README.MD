# tscripts

A monorepo of configs for doing JS development

## About this project

[tscripts](./packages/tscripts) is a package that combines shared configuration and dependencies for building, linting, testing, formatting, and releasing libraries for Node and the browser. It is opinionated, but allows configuration to avoid lock-in. You can also pick and choose which scripts you use. It is inspired by other tooling bundles like [react-scripts](https://www.npmjs.com/package/react-scripts) and [@spotify/web-scripts](https://www.npmjs.com/package/@spotify/web-scripts).

```bash
yarn add --dev tscripts
```

It is intended to be used within a project as a series of npm scripts.

```json
{
  "devDependencies": {
    "tscripts": "^0.1.0",
    "jest": "^24.9.0"
  },
  "scripts": {
    "build": "babel src --ignore \"_*\" --out-dir lib --extensions .ts",
    "start": "npm run build && node ./lib/main.js",
    "format": "prettier --write 'src/**/*.{js,ts}'",
    "test-lint": "eslint 'src/**/*.{js,ts}'",
    "test-src": "jest --passWithNoTests --verbose",
    "typecheck": "tsc --pretty",
    "test": "npm run test-lint && npm run typecheck && npm run test-src"
  }
}
```

View the [full CLI documentation](./packages/tstart) for more details on how to get started.

## Getting Started

### Create a new library

To quickly get started with a new `tscripts` library, you can use npx or install the starter CLI first

```sh
# Run using npx
npx tstart init my-awesome-project

# Install and run
yarn global add tstart
tstart init my-awesome-project
```

## Related projects we use

- [TypeScript]: a superset of JavaScript which we think helps make code readable and less bug-prone.
- [Babel]: a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.
- [ESLint]: used for static code analysis with some auto-fixing.
- [Prettier]: use to format code pre-commit and automatically in your editor.
- [Jest]: our preferred JavaScript test framework.commands.

## Contributing

Merge / Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Make sure to run

```bash
yarn bootstrap
lerna run test --stream
```

and the lint, typecheck, build, and tests are passing.

Please make sure to update tests as appropriate.

### Development

You can code directly by opening the root folder or specific packages folder with your IDE / Text Editor and start tinkering

```bash
# Specific package
code packages/package-name

# Or the root folder
code .
```

### Release

To do a release and tag, make sure your role is `Maintainer` and is allowed to push to `main` branch.

run

```bash
yarn release
```

and finish the command line prompt, `lerna` will automatically find changes for release, bump the version inside package's `package.json`, generate appropriate `CHANGELOG` using conventional-commit, then tag every package according to semantic version, and lastly commit and push the changes to origin remote.

### Commit and Merge / Pull Request Title

Currently we are following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) guideline to determine semantic version and changelog auto generation, presets that we use is [angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md).

### Type

Should be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: docker, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: gitlab-ci, bash scripts)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
