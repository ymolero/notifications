module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "tsconfig.json",
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'jest', 'prettier'],
  extends: [
    'prettier', 
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-console': 1,
    'camelcase': 1,
    'eqeqeq': 0,
    'curly': 2,
    'quotes': [1, 'single'],
    '@typescript-eslint/no-explicit-any': 0

  },
};
