class EventEmitter {
  constructor() {
    this.events = {};
  }

  //on

  on(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].push(listener);
    } else {
      this.events[event] = [listener];
    }
  }

  //emit
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listenner) => {
        listenner(...args);
      });
    } else {
      console.log("event not fount");
    }
  }

  //off
}


const emitter= new EventEmitter()


emitter.on("greet",(name,city)=>{
console.log(`${name} is from ${city}` )
})

emitter.emit("greet","piyush","pune")
