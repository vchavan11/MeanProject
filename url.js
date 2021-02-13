var url = require("url");
var adr = "http://localhost:5000/url.html?name=Alex&age=24";
var q = url.parse(adr, true);

console.log(q);
console.log(q.host); //returns 'localhost:5000'
console.log(q.pathname); //returns '/url.html'
console.log(q.search); //returns '?name=2017&age=24'

var qdata = q.query; //returns an object
console.log(qdata.name); //returns 'february'
