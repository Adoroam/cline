// READ/WRITE FROM TERMINAL
const { createInterface } = require('readline')

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

module.exports = { term }