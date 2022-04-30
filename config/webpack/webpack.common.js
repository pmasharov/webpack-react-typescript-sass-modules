const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolvePath       = require('./utils/resolvePath')
const rules             = require('./loaders')

module.exports = {
  entry:   resolvePath('src/index.jsx'),
  module:  {rules},
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('index.html'),
    }),
  ],
  output:  {
    path:     resolvePath('public'),
    filename: 'bundle.js',
  },
}
