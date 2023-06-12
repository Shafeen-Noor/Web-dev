const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.get("/product", async (req, res) => {
  try {
    const productId = req.query.id;

    const product = await Products.findById(productId);

    res.render("product", { product });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
