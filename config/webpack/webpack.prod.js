const {merge}              = require('webpack-merge')
const common               = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(
  common,
  {
    plugins: [
      new MiniCssExtractPlugin(),
    ],
  })
