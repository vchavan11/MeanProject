const express = require("express");
const app = express();

const prods = [
  { prodId: 1001, prodName: "Mobile 1" },
  { prodId: 1002, prodName: "Mobile 2" },
  { prodId: 1003, prodName: "Mobile 3" },
];

// app.get(route, callBack);
app.get("/", (req, res) => {
  res.send('We are in "/" ');
});

app.get("/api/products", (req, res) => {
  res.send(prods);
});

app.get("/api/product/:prodId", (req, res) => {
  //   res.send(req.params.prodId);
  //   console.log(typeof req.params.prodId);
  //   const prod = prods.find((prod) => prod.prodId === +req.params.prodId);
  const prod = prods.find(
    (prod) => prod.prodId === parseInt(req.params.prodId)
  );

  if (!prod) res.status(404).send("Something went wrong..!");

  res.send(prod);
});

app.listen(3000, () => console.log(`server started on 3000 ...!`));
