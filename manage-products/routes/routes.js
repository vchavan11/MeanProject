// routes.js

const express = require("express");

// express.Router() : Routing refers to how an application's endpoints (URIs) respond to client requests.
// You define routing using methods of the Express app object that correspond to HTTP methods.

const router = express.Router();

// Product : to find(), save() and remove()
const Product = require("../model/product");
router.get("/products", (req, res, next) => {
  //   res.send("<h1>Retrieving the products list</h1>");  // comment this line

  Product.find(function (err, products) {
    if (err) console.log("routes.js: err to 'find()' products : ", err);
    res.json(products);
  });

  // visit to see products info ->  http://localhost:3000/api/products
});

// add product
router.post("/product", (req, res, next) => {
  // logic to add product

  let newProduct = new Product({
    prodId: req.body.prodId,
    prodName: req.body.prodName,
    price: req.body.price,
  });

  newProduct.save((err, product) => {
    console.log("routes->save(): product : ", product);
    if (err) {
      res.json({ msg: "Failed to add Product" });
    } else {
      res.json({ msg: "Product added successfully...!", newProduct: product });
    }
  });
});

// delete product
router.delete("/product/:id", (req, res, next) => {
  //logic to delete product

  Product.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
