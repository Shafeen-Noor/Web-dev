const mongoose = require("mongoose");
const Joi = require('joi');

let modelSchema = mongoose.Schema({
  email: Joi.string().email().required(),
  message: Joi.string().required(),
  time: Joi.date(),
});
let Contact = mongoose.model("Contact", modelSchema);
module.exports = Contact;
