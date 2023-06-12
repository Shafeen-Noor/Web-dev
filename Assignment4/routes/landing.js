const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.get("/landing", async (req, res) => {
  res.render("landing");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      req.flash("error", "Invalid email or password");
      return res.redirect("/landing");
    }

    if (password !== user.password) {
      req.flash("error", "Invalid email or password");
      return res.redirect("/landing");
    }

      req.session.user = user;
      req.flash("success", "Logged in Successfully");
      res.redirect("/home");
  } catch (error) {
    console.error(error);
    req.flash("error", "Server Error");
    res.redirect("/landing");
  }
});

module.exports = router;
