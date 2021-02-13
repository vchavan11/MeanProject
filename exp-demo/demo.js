const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("We are in /");
});

app.listen(3000, () => console.log("server started.."));
