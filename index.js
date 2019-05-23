#!/usr/bin/env node 

// import helper search function
const { search } = require('./commands');
//console.log(process.argv);
const [command, ...rest] = process.argv.splice(2);

switch (command) {
  case 'search':
    search(rest);
    break;
  default:
    break;
}

