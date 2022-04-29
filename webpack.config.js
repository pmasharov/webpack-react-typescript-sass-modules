const path                 = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  console.log(env)
  return ({
    mode:      'development',
    entry:     path.join(__dirname, 'src', 'index.jsx'),
    output:    {
      path:     path.resolve(__dirname, './public'),
      filename: 'bundle.js',
    },
    devServer: {
      historyApiFallback: true,
      static:             {
        directory: path.join(__dirname, '/'),
      },
      port:               3000,
      hot:                true,
      open:               true,
    },
    module:    {
      rules: [
        {
          test:    /\.jsx?$/,
          exclude: /(node_modules)/,
          loader:  'babel-loader',
          options: {
            presets: [
              '@babel/preset-react', '@babel/preset-env',
            ],
          },
        },
        {
          test: /\.css/,
          exclude: /\.module\.css/,
          use:  [
            MiniCssExtractPlugin.loader,
            // 'style-loader',
            {
              loader:  'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.module\.css/,
          use:  [
            MiniCssExtractPlugin.loader,
            // 'style-loader',
            {
              loader:  'css-loader',
              options: {
                sourceMap: true,
                modules:       {
                  localIdentName: '[path][name]__[local]__[hash:base64:5]',
                },
              },
            },
          ],
        },
        {
          test: /\.module\.(scss|sass)/,
          use: [
            MiniCssExtractPlugin.loader,
            // 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  localIdentName: '[path][name]__[local]__[hash:base64:5]',
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ],
    },
    plugins:   [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html'),
      }),
      new MiniCssExtractPlugin(),
    ],
  })
}
