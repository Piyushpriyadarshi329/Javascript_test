class LeakyBucket {
  constructor(capacity, leakRate) {
    this.capacity = capacity;
    this.queue = [];
    setInterval(() => this.leak(), 1000 / leakRate);
  }

  leak() {
    if (this.queue.length > 0) {
      const next = this.queue.shift();
      next();
    }
  }

  addRequest() {
    if (this.queue.length >= this.capacity) {
      return false; // bucket full
    }

    return new Promise(resolve => {
      this.queue.push(resolve);
    });
  }
}


let bucket =new LeakyBucket(3,1);


console.log(bucket.addRequest());
console.log(bucket.addRequest());
console.log(bucket.addRequest());
console.log(bucket.addRequest());




console.log(bucket)


