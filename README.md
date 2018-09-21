# new cli from scratch

- initialize npm in folder `npm init -y`
- create cli entrypoint `cli.js`
- make file executable `chmod +x cli.js`
- add bin to package.json as either a string `"./cli.js"` or an object `{ "alias": "./cli.js" }`
- tell npm to use it `npm link`
  - run as sudo if linux `sudo npm link`
  - to undo the link `sudo npm unlink`

# From cline 
- clone cline `git clone urlHere`
- rename alias in package.json in bin object
- run `npm link` as administrator