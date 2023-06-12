const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
    Type: String,
    name: String,
    decription:String,
    price:Number,
    image:String,

});
let Products = mongoose.model("Products", modelSchema);
module.exports = Products;
