const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
    browser: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  extends: [require.resolve('@vercel/style-guide/eslint/next'), 'eslint-config-turbo', 'love', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'separate-type-imports',
      },
    ],
  },
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  ignorePatterns: ['.*.js', 'node_modules/', 'next-env.d.ts'],
}
