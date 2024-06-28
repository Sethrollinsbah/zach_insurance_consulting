// Import necessary modules and configurations
const {configs} = require('@eslint/js');
const tsEslintConfig = require('typescript-eslint');

// Merge your configurations
module.exports = {
  languageOptions: {globals: require('globals').browser},
  ...configs.recommended,
  ...tsEslintConfig.configs.recommended,
  // Incorporate SvelteKit options
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
};

