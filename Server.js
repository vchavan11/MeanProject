// var http = require("http");//import node
// var server = http.createServer(function (req , res){

// if (req.url == "/"){

// res.writeHead(200 , {"Content-type":"text/html"});

// res.write("<html><body><p>This ishome Page</p></body></html>");
// res.end();
// }else if (req.url =="/admin"){

// res.writeHead(200, {"Content-type":"text/html"});
// res.write("<html><body><p>This is admin Page</p></body></html>");
// res.end();

// }else res.end("Invalid request");
// });

// server.listen(5000);

// another one

var http = require("http");
var server = http.createServer(function (req, res) {
  if (req.url == "/data") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(JSON.stringfy({ message: "hello world" }));
    res.end();
  }
});
server.listen(5000);
console.log("Nodejs web server at port 5000 is runnning");
