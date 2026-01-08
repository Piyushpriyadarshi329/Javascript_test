class TokenBucket {
  constructor(capacity, refillRatePerSec) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRatePerSec;
    this.lastRefill = Date.now();
  }

  refill() {
    const now = Date.now();
    const secondsPassed = (now - this.lastRefill) / 1000;

    const tokensToAdd = secondsPassed * this.refillRate;
    this.tokens = Math.min(
      this.capacity,
      this.tokens + tokensToAdd
    );

    this.lastRefill = now;
  }

  allowRequest() {
    this.refill();

    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true;
    }
    return false;
  }
}
