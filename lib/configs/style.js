module.exports = {
  root: true,

  // plugins: [
  //   '@stilingue',
  //   'stylelint-scss',
  //   'stylelint-order'
  // ],
  plugins: ['style'],

  extends: [
    'stylelint-config-standard',
    require.resolve('./-private/stylelint/best-practices.js')
  ]
};
