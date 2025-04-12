function serchfun(...args) {
  console.log("fun call", args);
}

const handler = {
  count: 0,
  handleClick: function () {
    this.count++;
    console.log(`Button clicked ${this.count} times`);
  },
};

function debounce(fun, delay = 2000) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

function debounce1(fun, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

// function throttle(func, interval = 500) {
//   let isRunning = false;

//   return function (...args) {
//     if (!isRunning) {
//       isRunning = true;

//       func.apply(this, args);
//       setTimeout(() => {
//         isRunning = false;
//       }, interval);
//     }
//   };
// }

function throttle(fun, delay) {
  let isRunning = false;

  return function (...args) {
    if (!isRunning) {
      isRunning = true;

      fun.apply(this, args);
      setTimeout(() => {
        isRunning = false;
      }, delay);
    } 
  };
}

const searchWithDebounce = debounce(serchfun, 500);
const ThrottleFun = throttle(serchfun, 2000);
