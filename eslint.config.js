module.exports = [
  { ignores: ['node_modules/', 'dist/'] },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'writable',
        process: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'error',
      indent: ['error', 1],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'eol-last': ['error', 'always'],
    },
  },
];