// READ/WRITE FROM TERMINAL
const { createInterface, cursorTo } = require('readline')

// COLORS
const { cyan, reset } = require('./colors')

// INPUTS
const { inputs } = require('./inputs')

// TAB AUTOCOMPLETE
function tab_completer(line) {
  let completions = generateCompletions()
  let hits = completions // FILTERS MATCHING SUBSTRINGS
    .filter(comp => comp.startsWith(line))
  return [hits.length ? hits : completions, line] // COMPLETER Fn REQUIRED SYNTAX OUTPUT
}

function generateCompletions() {
  let completions = []
  inputs.forEach(({ examples }) => examples.forEach(example => completions.push(example)))
  return completions
}

// CREATE READLINE INSTANCE
const term = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  completer: tab_completer,
  prompt: `${cyan}þ${reset} `
})

// // SIGINT EVENT (CTRL + C)
// term.on('SIGINT', sigintHandler)
// // SIGINT HANDLER
// function sigintHandler() {
//   term.resume()
//   term.question('exit?\n', answer => (answer.startsWith('y'))
//     ? process.exit(0)
//     : term.prompt())
// }

process.on('clear', () => cursorTo(process.stdout, 0))
process.on('prompt', () => term.prompt(false))

module.exports = { term }