const path                 = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const fs                   = require('fs')
const rules                = require('./loaders')
const rootDir              = fs.realpathSync(process.cwd())
const resolvePath          = relativePath => path.resolve(rootDir, relativePath)

module.exports = () => ({
  mode:      'development',
  entry:     resolvePath('src/index.jsx'),
  output:    {
    path:     resolvePath('public'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    static:             {
      directory: resolvePath('.'),
    },
    port:               3000,
    hot:                true,
    open:               true,
  },
  module:    {rules},
  plugins:   [
    new HtmlWebpackPlugin({
      template: resolvePath('index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
})
