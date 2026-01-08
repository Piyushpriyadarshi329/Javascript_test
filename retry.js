// function retry(fn, retries = 3, delay = 1000) {
//   return new Promise((resolve, reject) => {
//     function attempt(n) {
//       fn()
//         .then(resolve)
//         .catch((err) => {
//           if (n === 0) {
//             reject(err);
//           } else {
//             setTimeout(() => attempt(n - 1), delay);
//           }
//         });
//     }

//     attempt(retries);
//   });
// }

function retry(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      fn()
        .then(resolve)
        .catch((err) => {
          if (n == 0) {
            reject(err);
          } else {
            setTimeout(() => {
              attempt(n - 1);
            }, delay);
          }
        });
    }

    attempt(retries);
  });
}

let count = 0;

// function unstableApi() {
//   return new Promise((resolve, reject) => {
//     count++;
//     console.log(`Attempt #${count}`);
//     Math.random() < 0.7 ? reject("Fail") : resolve("Success");
//   });
// }

function unstableApi() {
  return new Promise((resolve, reject) => {
    count++;
    let random= Math.random()
    console.log("count", count,random);

    if (random < 0.7) {
      reject("Failed");
    } else {
      resolve("Success");
    }
  });
}

retry(unstableApi, 5, 1000)
  .then((res) => console.log("✅", res))
  .catch((err) => console.log("❌", err));
