const regexps          = require('../utils/regexps')
const getStylesLoaders = require('../utils/getStylesLoaders')

module.exports = () => [
  {
    test:    regexps.css,
    exclude: regexps.cssModule,
    use:     getStylesLoaders(),
  },
  {
    test: regexps.cssModule,
    use:  getStylesLoaders({module: true}),
  },
  {
    test: regexps.sass,
    exclude: regexps.sassModule,
    use:  getStylesLoaders({preprocessor: true}),
  },
  {
    test: regexps.sassModule,
    use:  getStylesLoaders({module: true, preprocessor: true}),
  },
//  postcss-loader
]
