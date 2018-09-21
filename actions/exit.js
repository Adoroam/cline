module.exports = {
  command: /exit|quit|stop/i,
  examples: ['exit', 'quit', 'stop'],
  action: (text) => {
    console.log(`process ${text}.`)
    process.exit(0)
  }
}