const common      = require('./webpack.common')
const {merge}     = require('webpack-merge')
const resolvePath = require('./utils/resolvePath')

module.exports = merge(
  common,
  {
    mode:      'development',
    devServer: {
      historyApiFallback: true,
      static:             {
        directory: resolvePath('.'),
      },
      port:               3000,
      hot:                true,
      open:               true,
    },
  })
