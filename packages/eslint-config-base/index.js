'use strict';

module.exports = {
  extends: ['xo-space', 'prettier'],
  globals: {
    afterAll: true,
    afterEach: true,
    beforeAll: true,
    beforeEach: true,
    describe: true,
    expect: true,
    fit: true,
    it: true,
    jasmine: true,
    xit: true,
    jest: true,
  },
  rules: {
    'capitalized-comments': 0,
    'no-warning-comments': [
        0,
        {
"terms": ["todo", "fixme", "any other term"], "location": "anywhere" 
        }
    ],
    'no-implicit-coercion': [
      0,
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],
    // require trailing commas in multiline object literals
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    // require or disallow use of semicolons instead of ASI
    semi: [2, 'always'],
  },
};
