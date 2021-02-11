module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021, // 最新版
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  env: {
    es2021: true,
    browser: true, // importしなくてもgetElementById使える
    jest: true,
    node: true,
  },
  plugins: [
    'react-hooks',
    'react',
    '@typescript-eslint',
    'eslint-plugin-prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'prefer-arrow-callback': 'error',
    'func-style': ['error', 'expression'], // fuctionとしての形式では書けない
    'arrow-body-style': ['error', 'always'],
    'react/react-in-jsx-scope': 0,
    'react/display-name': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 0, // エラーなくなる
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // prettierrc使うか?の記述
  },
};
