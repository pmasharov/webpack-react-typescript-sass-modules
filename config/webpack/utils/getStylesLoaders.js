const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = ({module = false, preprocessor = false} = {}) => [
  MiniCssExtractPlugin.loader,
  // 'style-loader',
  {
    loader:  'css-loader',
    options: {
      sourceMap: true,
      ...(module && {
        modules: {
          localIdentName: '[path][name]__[local]__[hash:base64:5]',
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
