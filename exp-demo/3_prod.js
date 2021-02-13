const express = require("express");
const app = express();

// to work with POSTMAN json
// imports:[RouterModule.forRoot(), express.json()]
app.use(express.json());

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

app.post("/api/product", (req, res) => {
  const newProd = {
    // prodId: req.params.prodId,
    // prodName: req.params.prodName,
    prodId: req.body.prodId,
    prodName: req.body.prodName,
  };

  prods.push(newProd);
  //   res.send(newProd);
  res.send("Prod Added");
});

app.listen(3000, () => console.log(`server started on 3000 ...!`));
