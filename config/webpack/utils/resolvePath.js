const fs   = require('fs')
const path = require('path')

const rootDir = fs.realpathSync(process.cwd())

module.exports = relativePath => path.resolve(rootDir, relativePath)
