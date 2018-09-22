#!/usr/bin/env node

// TERM
const { term } = require('./term')

// INPUTS
const { inputs } = require('./inputs')

// TERMINAL EVENT
term.on('line', lineHandler)

// TERMINAL HANDLER
function lineHandler(text) {
  inputs
    .filter(({ command }) => command.test(text))
    .forEach(({ action }) => action(text))
  // term.prompt()
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

function startup() {
  let [x, y, ...args] = process.argv
  args.length
    ? args.forEach(arg => lineHandler(arg))
    : term.prompt()
}

startup()