const process = require('process')

process.stdin.on('data', (data) => {
  console.log(`hello from stdin: ${data}`);
});