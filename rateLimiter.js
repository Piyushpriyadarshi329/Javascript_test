// class TokenBucket {
//   constructor(capacity, refillRatePerSec) {
//     this.capacity = capacity;
//     this.tokens = capacity;
//     this.refillRate = refillRatePerSec;
//     this.lastRefill = Date.now();
//   }

//   refill() {

//     const now = Date.now();
//     const secondsPassed = (now - this.lastRefill) / 1000;
//     const tokensToAdd = secondsPassed * this.refillRate;
//     this.tokens = Math.min(
//       this.capacity,
//       this.tokens + tokensToAdd
//     );
//     this.lastRefill = now;
//   }

//   allowRequest() {
//     this.refill();
//     if (this.tokens >= 1) {
//       this.tokens -= 1;
//       return true;
//     }
//     return false;
//   }
// }


class TokenBucket {
   constructor(capacity,refillRatePerSecond){
    this.capacity=capacity,
    this.refillRatePerSecond=refillRatePerSecond,
    this.lastRefill= Date.now();
    this.tokens= capacity
   }


   refill(){
        const now = Date.now();
        const secondPased= (now-this.lastRefill)/1000
        const tokenstoAdd= secondPased*this.refillRatePerSecond
        this.tokens= Math.min(this.capacity,this.tokens+tokenstoAdd)
        this.lastRefill= Date.now();
    }




   allowRequest(){
     this.refill();
     if(this.tokens>=1){
      this.tokens -= 1;
        return true
     }else{
        return false
     }

   }

}

const bucket = new TokenBucket(3, 0.5); // 10 capacity, 2/sec


console.log("bucket",bucket)

bucket.allowRequest();
bucket.allowRequest();
bucket.allowRequest();
bucket.allowRequest();


console.log("bucket",bucket)


