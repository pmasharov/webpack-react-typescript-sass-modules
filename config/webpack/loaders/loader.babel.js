const regexps = require('../utils/regexps')

module.exports = () => ({
  test:    regexps.script,
  exclude: /node_modules/,
  loader:  'babel-loader',
  options: {
    presets: [
      '@babel/preset-react', '@babel/preset-env',
    ],
  },
})
