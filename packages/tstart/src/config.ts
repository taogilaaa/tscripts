export default {
  node: {
    starter: 'node',
    configFiles: {
      'default.babel.config.js': 'babel.config.js',
      'default.eslintignore': '.eslintignore',
      'default.eslintrc.js': '.eslintrc.js',
      'default.gitignore': '.gitignore',
      'default.jest.config.js': 'jest.config.js',
      'default.prettierignore': '.prettierignore',
      'default.prettierrc.js': '.prettierrc.js',
      'default.tsconfig.json': 'tsconfig.json',
    },
    mkdir: ['.vscode', 'dist', 'src', 'src/__tests__', 'node_modules'],
    // Improve this later
    seedFiles: {
      '.vscode/settings.json':
        '{\r\n  "editor.tabSize": 2,\r\n  "editor.rulers": [80],\r\n  "editor.wordWrapColumn": 80,\r\n  "files.trimTrailingWhitespace": true,\r\n  "files.insertFinalNewline": true,\r\n  "editor.formatOnSave": true\r\n}',
      'src/main.ts':
        'function add(a: number, b: number) {\r\n  return a + b;\r\n}\r\n\r\nexport { add };\r\n',
      'src/__tests__/main.test.ts':
        "import { add } from '../main';\r\n\r\ndescribe('add', () => {\r\n  it('should return 2 when given 1 and 1', () => {\r\n    expect(add(1, 1)).toBe(2);\r\n  });\r\n});\r\n",
    },
    packages: [],
    devPackages: [
      // babel
      // typescript
      // eslint
      // code formatting
      'tscripts',

      // testing
      'jest',

      // @types
      '@types/jest',
      '@types/node',

      // others
      'nodemon',
    ],
  },
};
