var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("hello");
});

app.get("/abc", function (req, res) {
  res.send("hello from abc");
});

app.get("/*product", function (req, res) {
  res.send("hello from any products");
});

app.get("/product*", function (req, res) {
  res.send("hello from any products");
});
app.get("/*product*", function (req, res) {
  res.send("hello from any products");
});

app.listen(4000, () => console.log("server started.."));
