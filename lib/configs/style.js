module.exports = {
  root: true,

  plugins: [
    '@stilingue',
    'stylelint-scss',
    'stylelint-order'
  ],

  extends: [
    'stylelint-config-standard',
    require.resolve('./-private/stylelint/best-practices.js')
  ]
};
