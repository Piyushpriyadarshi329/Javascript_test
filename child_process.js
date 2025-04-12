// const { exec } = require('child_process');
// url = "https://www.youtube.com/";
// cmdCommand = `start chrome /new-tab ${url}`;
// console.log("url",url)
// exec(cmdCommand);



// const { exec } = require('child_process');
// exec('ping google.com', (error, stdout, stderr) => {
  
//   if (error) {
//     console.error(`error: ${error.message}`);
//     return;
//   }
// if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
// console.log(`stdout:\n${stdout}`);
// });


// var exec = require('child_process').exec;
// exec("ping -c 3 google.com", function (err, stdout, stderr) {
//     console.log(stdout);
// });

const { spawn } = require('child_process');
const subProcess = spawn("find", ["test"]);
subProcess.stdout.on('data', (data) => {
  console.log(`stdout:\n${data}`);
});
subProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
subProcess.on('error', (error) => {
  console.error(`error: ${error.message}`);
});
subProcess.on('close', (code) => {
  console.log(`child process salida ${code}`);
});