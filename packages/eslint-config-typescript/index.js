'use strict';

module.exports = {
  extends: [
    '@taogilaaa/eslint-config-base',
    'xo-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'capitalized-comments': 0,
    '@typescript-eslint/interface-name-prefix': 0,

    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/explicit-function-return-type': 0,

    /*
      Removed and commented for further reads

      https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js#L204-L276
      https://github.com/typescript-eslint/typescript-eslint/releases/tag/v3.0.0
    */
    // '@typescript-eslint/camelcase': ['error', { properties: 'never' }],


    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    semi: ['error', 'always'],
  },
};
