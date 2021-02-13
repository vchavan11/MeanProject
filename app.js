// // function sayHello(name){

// //     console.log('hello '+ name);
// // }

// // sayHello('Vaibhav');

// // console.log(module);

// // console.log(logger);

// // var log = require('./logger');

// // log('Hello vaibhav data sent to log');

// // const path= require('path');

// // const os = require('os');

// // var totalmemory = os.totalmem();
// // var freememory = os.freemem();

// // // var osobj = os.cpus()

// // console.log('freememory is : '+freememory);

// const fs = require('fs');

// // const files = fs.readdirSync('./');

// // fs.readdir('./',function(err , files){
// // if(err) console.log('Error',err);
// // else console.log('result ',files);

// // });

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

//register listener
// emitter.on("MessageLogged", (arg) => {
//   console.log("Listener called", arg);
// });
//event raised
// emitter.emit("MessageLogged", { id: 1, url: "http://" });

// // console.log(files);

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }

  if (req.url === "/api/vaibhav") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("listening on port 3000");
