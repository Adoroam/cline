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
    .forEach(({ action }) => {
      action(text)
    })
  process.emit('prompt')
}

function startup() {
  let [x, y, ...args] = process.argv
  args.length
    ? lineHandler(args.join(' '))
    : process.emit('prompt')
}

startup()