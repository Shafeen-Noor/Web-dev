const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
router.get("/contact", async (req, res) => {

    res.render("contact");
 
});

router.post("/contact", async (req, res) => {
    const { email, message } = req.body;
    const currentTime = new Date();
 
    const newContact = new Contact({
      email,
      message,
      time: currentTime,
    });
  
    try {
    
      await newContact.save();
      res.redirect("/contact");
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  });
  
  module.exports = router;  
module.exports = router;

