const styles = require('./styles')
const babel  = require('./babel')

module.exports = [
  babel(),
  ...styles(),
]
