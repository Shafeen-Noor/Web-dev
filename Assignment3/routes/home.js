const express = require("express");
const router = express.Router();
const Products = require("../models/Products");


router.get("/home", async (req, res) => {
  
  if (!req.session.user) {
    req.flash("error", "You need to login to access this resource");
    req.session.save(() => {
      res.redirect("/landing");
    });
  } else {
    try {
      const products = await Products.find();
  
      const productsByType = groupProductsByType(products);
  
      res.render("home", { productsByType });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }


   
  });
  function groupProductsByType(products) {
    const productsByType = {};
  
    products.forEach((product) => {
      if (!productsByType[product.Type]) {
        productsByType[product.Type] = [];
      }
      productsByType[product.Type].push(product);
    });
  
    return productsByType;
  }
   
  
module.exports = router;

