const { fork } = require('child_process');

console.log('Main process started');

// Fork a child process to handle the heavy computation
const compute = fork('./compute.js');

// Send input data to child
compute.send({ start: 1, end: 1e8 });

// Receive the result from the child
compute.on('message', (result) => {
  console.log(`Sum is: ${result}`);
});

console.log('Main process continues to run...');
