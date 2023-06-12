const express = require("express");
let router = express.Router();


router.get("/logout", async (req, res) => {
    req.session.user = null;
    req.flash("success", "Logged out!");
    res.redirect("landing"); 
 });
module.exports = router;
 