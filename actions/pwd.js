const { exec } = require('child_process')
const terminalCommand = 'sudo apt-get update && sudo apt-get upgrade'
module.exports = {
  command: /pwd/i,
  examples: ['pwd'],
  action: (text) => exec('pwd', { shell: true }, (err, stdout, stderr) => {
    process.emit('clear')
    console.log(stdout)
    process.emit('prompt')
  })
}