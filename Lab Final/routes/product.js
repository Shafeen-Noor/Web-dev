
const express = require("express");
const router = express.Router();
const Hospital = require("../models/hospitals");

router.get("/product", async (req, res) => {
  try {
    let hospitals = await Hospital.find();

    res.render("product", { hospitals });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/product", async (req, res) => {
    try {
      const { name, location, rating } = req.body;
  
      const hospital = new Hospital({
        name,
        location,
        rating,
      });
  
      await hospital.save();
  
      res.redirect("/product");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  router.get("/delete/:id", async function (req, res, next) {
    try {
      let deletedHospital = await Hospital.findByIdAndDelete(req.params.id);
      if (!deletedHospital) {
        return res.status(404).send("Hospital not found");
      }
      res.redirect("/product");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Products = require("../models/products"); // Correct the path to the products model

// router.get("/product", async (req, res) => {
//   // Retrieve the products from the database
//   let products = await Products.find();
//   res.render("product", { products }); // Pass the products to the template
// });

// module.exports = router;



// const express = require("express");
// let router = express.Router();
// let products = require("./models/products");

// router.get("/product", async (req, res) => {
 
// //   let product= await products.find()
// //   console.log(products)
//   return res.render("product");
// })
// module.exports = router;
