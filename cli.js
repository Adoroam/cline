#!/usr/bin/env node

// FILESYSTEM
const { readdirSync } = require('fs')

// READ/WRITE FROM TERMINAL
const { createInterface } = require('readline')

// COLORS
const { cyan, reset } = require('./colors')

const inputs = readdirSync('./actions')
  .map(filename => `./actions/${filename}`)
  .map(filepath => require(filepath))

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


// TERMINAL EVENT
term.on('line', lineHandler)
// TERMINAL HANDLER
function lineHandler(text) {
  inputs
    .filter(({ command }) => command.test(text))
    .forEach(({ action }) => action(text))
  term.prompt()
}

// // SIGINT EVENT (CTRL + C)
// term.on('SIGINT', sigintHandler)
// // SIGINT HANDLER
// function sigintHandler() {
//   term.resume()
//   term.question('exit?\n', answer => (answer.startsWith('y'))
//     ? process.exit(0)
//     : term.prompt())
// }

term.prompt()