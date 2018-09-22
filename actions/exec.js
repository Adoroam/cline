const { exec } = require('child_process')
const regex = /^run\s(.+)$/i
const input = text => regex.exec(text)
module.exports = {
  command: /^run\s(.+)$/i,
  examples: ['where'],
  action: (text) => {
    let execCmd = input(text)[1]
    exec(execCmd, { shell: true }, (e, out, err) => console.log(out))
  }
}