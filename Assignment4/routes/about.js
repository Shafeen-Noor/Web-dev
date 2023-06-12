const express = require("express");
const router = express.Router();

router.get("/about", async (req, res) => {
  if (!req.session.user) {
    req.flash("error", "You need to login to access this resource");
    req.session.save(() => {
      res.redirect("/landing");
    });
  } else {
    res.render("about", { flash: req.flash() });
  }
});

module.exports = router;
