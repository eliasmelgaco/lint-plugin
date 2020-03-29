module.exports = {
  root: true,

  // plugins: ['@stilingue'],

  extends: [
    'eslint:recommended',
    require.resolve('./-private/eslint/best-practices.js'),
    require.resolve('./-private/eslint/errors.js'),
    require.resolve('./-private/eslint/es6.js'),
    require.resolve('./-private/eslint/imports.js'),
    require.resolve('./-private/eslint/node.js'),
    require.resolve('./-private/eslint/strict.js'),
    require.resolve('./-private/eslint/style.js'),
    require.resolve('./-private/eslint/variables.js')
  ],

  parserOptions: {
    ecmaVersion: 2018,
  },

  overrides: [
    // JSON files
    {
      plugins: ['json'],

      extends: ['plugin:json/recommended'],

      files: [
        '**/*.json'
      ],

      rules: Object.assign({}, require('eslint-plugin-json').configs.recommended.rules, {})
    }
  ]
};
