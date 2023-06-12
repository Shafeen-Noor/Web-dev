const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.get("/register", (req, res) => {
    return res.render("register", { flash: req.flash() });
  });
  

router.post("/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash("error", "A user with this email already exists.");
      return res.render("register", { flash: req.flash() });
    }

    if (password !== confirmPassword) {
      req.flash("error", "Passwords do not match.");
      return res.render("register", { flash: req.flash() });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    
    req.session.user = newUser;
    req.flash("success", "Registration successful!");
    return res.redirect("/home");
  } catch (error) {
    console.log(error.message);
    req.flash("error", "An error occurred during registration.");
    return res.render("register", { flash: req.flash() });
  }
});

module.exports = router;
