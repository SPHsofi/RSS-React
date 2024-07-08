module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'react-refresh',
    'react-compiler',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'react-compiler/react-compiler': 'error',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  env: {
    es2020: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
