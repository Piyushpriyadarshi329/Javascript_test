process.on('message', ({ start, end }) => {
    console.log('Child process received data');
  
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    // Send the result back to the main process
    process.send(sum);
  });