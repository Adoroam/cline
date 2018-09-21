// FILESYSTEM
const { readdirSync } = require('fs')

// INPUTS
const inputs = readdirSync('./actions')
  .map(filename => `./actions/${filename}`)
  .map(filepath => require(filepath))

module.exports = { inputs }