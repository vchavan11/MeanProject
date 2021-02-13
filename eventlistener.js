var emitter = require("events").EventEmitter;

var em = new emitter();

//Subscribe eventOne
em.addListener("eventOne", function (data) {
  console.log("First subscriber: " + data);
});

//Subscribe eventTwo
em.on("eventTwo", function (data) {
  console.log("Second subscriber: " + data);
});

// Raising eventOne
em.emit("eventOne", "Some data..!");

// Raising eventTwo
em.emit("eventTwo", "Some data..!");
