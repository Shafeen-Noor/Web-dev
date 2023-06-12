const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

router.post("/cart", async (req, res) => {
  const { type, name, price } = req.body;

  try {
    const cartItem = new Cart({
      Type: type,
      name,
      price,
      quantity: 1, 
      userId: req.session.user._id, 
    });

    await cartItem.save();

    req.flash("success", "Item added to cart successfully");
    req.session.save(() => {
    });
  } catch (error) {
    console.error(error);
    req.flash("error", "Error adding item to cart");
    req.session.save(() => {
    });
  }
});

router.get("/cart", async (req, res) => {
  if (!req.session.user) {
    req.flash("error", "You need to login to access this resource");
    req.session.save(() => {
      res.redirect("/landing");
    });
  } else {
    const userId = req.session.user._id;
    const cartItems = await Cart.find({ userId }); 
    res.render("cart", { cartItems, flash: req.flash() });
  }
});
router.post("/cart/remove/:itemId", async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.session.user._id;
  
    try {
      await Cart.deleteOne({ _id: itemId, userId });
  
      req.flash("success", "Item removed from cart successfully");
      req.session.save(() => {
        res.redirect("/cart");
      });
    } catch (error) {
      console.error(error);
      req.flash("error", "Error removing item from cart");
      req.session.save(() => {
        res.redirect("/cart");
      });
    }
  });
module.exports = router;
