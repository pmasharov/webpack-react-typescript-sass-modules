const {nodeEnv} = require('./utils/env')

module.exports = () => require(`./webpack.${nodeEnv}.js`)
