const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  location: String,
  rating: String,
});
let Hospitals = mongoose.model("Hospitals", modelSchema);
module.exports = Hospitals;
