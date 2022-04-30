const styles = require('./loader.styles')
const babel  = require('./loader.babel')

module.exports = [
  babel(),
  ...styles(),
]
