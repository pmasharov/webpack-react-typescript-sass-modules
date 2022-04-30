const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {isDevelopment}      = require('../utils/env')

module.exports = ({module = false, preprocessor = false} = {}) => [
  isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader:  'css-loader',
    options: {
      sourceMap: true,
      ...(module && {
        modules: {
          localIdentName: '[local]__[hash:base64:5]',
        },
      }),
    },
  },
  preprocessor && {
    loader:  'sass-loader',
    options: {
      sourceMap: true,
    },
  },
].filter(Boolean)
